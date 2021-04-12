import { Redirect, useParams } from "react-router";
import getHeroById from '../selectors/getHeroById';

const HeroScreen = () => {

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

  return (
    <>
      <h2>Hero Screen</h2>
      <hr />
      <pre>{ JSON.stringify(hero, null, 3) }</pre>
    </>
  );
}

export default HeroScreen;