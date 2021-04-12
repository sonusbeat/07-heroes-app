import { useLocation } from 'react-router';
import queryString from "query-string";

import heroes from '../../data/heroes';
import HeroCard from '../heroes/HeroCard';
import useForm from '../../hooks/useForm';

const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  // const heroesFiltered = heroes.filter(hero => hero.id === 1);
  const heroesFiltered = heroes;

  const [ formValues, handleInputChange, reset ] = useForm({ searchText: q });

  const { searchText } = formValues;

  const HandleSearch = (event) => {
    event.preventDefault();
    history.push(`?q=${searchText}`);
    reset();
  };

  return (
    <section className="animate__animated animate__fadeIn">

      <h1>Search Hero</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h2>Search Form</h2>
          <hr/>

          <form onSubmit={ HandleSearch }>
            <div className="form-group">
              <input
                name="searchText"
                type="text"
                className="form-control mb-4"
                placeholder="Find your hero ..."
                onChange={ handleInputChange }
                value={ searchText }
                autoComplete="off"
              />
              <button
                onClick={ HandleSearch }
                className="btn btn-primary btn-block"
              >Search</button>
            </div>
          </form>
        </div>{/* .col */}

        <div className="col-7">
          <h2>Results</h2>
          <hr />
          {
            heroesFiltered.map(hero => (
              <HeroCard key={ hero.id } { ...hero } />
            ))
          }
        </div>{/* .col */}

      </div>{/* .row */}

    </section>
  );
}

export default SearchScreen;