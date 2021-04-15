import { useMemo } from 'react';
import { useLocation } from 'react-router';
import queryString from "query-string";

import getHeroesByName from '../selectors/getHeroesByName';
import HeroCard from '../heroes/HeroCard';
import useForm from '../../hooks/useForm';

const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { q = "" } = queryString.parse( location.search );

  const [ formValues, handleInputChange ] = useForm({ searchText: q });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ])

  const HandleSearch = (event) => {
    event.preventDefault();
    history.push(`?q=${searchText}`);
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
            ( q === '') &&
            <div className="alert alert-info">
              Search a Hero
            </div>
          }

          {
            ( q !== '' && heroesFiltered.length === 0 ) &&
            <div className="alert alert-danger">
              There is no a hero with the following query: "{ q }"
            </div>
          }

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