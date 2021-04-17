import { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { PropTypes } from 'prop-types';
import getHeroById from '../selectors/getHeroById';

const HeroScreen = ({ history }) => {

  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [ heroId ]);

  console.log("Hero:", hero);
  console.log("HeroId:", heroId);

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
    <section className="animate__animated animate__fadeIn">
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={ `../assets/${ heroId }.jpg` }
            alt={ superhero }
            className="img-thumbnail animate__animated animate__fadeInLeft"
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

HeroScreen.propTypes = {
  history: PropTypes.object.isRequired
};