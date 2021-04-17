import { Link } from 'react-router-dom';
import { heroesImages } from '../../helpers/heroesImages';


const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {

  return (
    <section className="card md-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">

          <img
            src={ heroesImages(`./${ id }.jpg`).default }
            className="card-img"
            alt={ superhero + " - " + id }
          />

        </div>{/* col */}
        <div className="col-md-8">
          <div className="card-body">

            <h3 className="card-title">{ superhero }</h3>

            <p className="card-text">{ alter_ego }</p>

            { ( alter_ego !== characters ) && <p className="card-text">{ characters }</p> }

            <p className="card-text">
              <small className="text-muted">{ first_appearance }</small>
            </p>

            <Link to={ `./hero/${ id }` }>
              Más ...
            </Link>

          </div>{/* card-body */}
        </div>{/* col */}
      </div>{/* row */}
    </section>
  );
}

export default HeroCard;