import heroes from '../../data/heroes';

const getHeroesByName = ( name = '' ) => {
  name = name.toLocaleLowerCase();

  if (name === '') {
    return [];
  }

  return heroes.filter(hero => {
    return hero.superhero.toLocaleLowerCase().includes( name );
  });

}

export default getHeroesByName;