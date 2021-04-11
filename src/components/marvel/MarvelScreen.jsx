import HeroesList from '../heroes/HeroesList';

const MarvelScreen = () => {
  return (
    <section>

      <h2>Marvel Comics</h2>
      <hr/>

      <HeroesList publisher="Marvel Comics" />

    </section>
  );
};

export default MarvelScreen;