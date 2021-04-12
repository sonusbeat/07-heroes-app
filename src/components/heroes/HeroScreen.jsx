import { Redirect, useParams } from "react-router";
import getHeroById from '../selectors/getHeroById';

const HeroScreen = ({ history }) => {

  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  if (!hero) {
    return <Redirect to="/" />
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const HandleReturn = () => {
    history.length <= 2 ? history.push("/") : history.goBack();
  };

  return (
    <section>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={ `../assets/${ heroId }.jpg` }
            alt={ superhero }
            className="img-thumbnail"
          />
        </div>{/* col */}

        <div className="col-8">
          <h2>{ superhero }</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter Ego:</b>&nbsp;{ alter_ego }</li>
            <li className="list-group-item"><b>Publisher:</b>&nbsp;{ publisher }</li>
            <li className="list-group-item"><b>First Appearance:</b>&nbsp;{ first_appearance }</li>
          </ul>

          <h3>Characters</h3>
          <p>{ characters }</p>

          <button
            className="btn btn-info"
            onClick={ HandleReturn }
          >
            Return
          </button>
        </div>{/* col */}

      </div>{/* row */}

    </section>
  );
}

export default HeroScreen;