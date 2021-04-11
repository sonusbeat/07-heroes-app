import heroes from "../../data/heroes";

const getHeroById = ( id ) => {
  if ( id === undefined ) {
    throw new Error(`Id: "${ id }" no es correcto`);
  }

  return heroes.find( hero => hero.id === id );
};

export default getHeroById;
