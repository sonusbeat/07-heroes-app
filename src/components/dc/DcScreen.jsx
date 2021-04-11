import HeroesList from '../heroes/HeroesList';

const DcScreen = () => {
  return (
    <section>

      <h2>Marvel Comics</h2>
      <hr/>

      <HeroesList publisher="DC Comics" />

    </section>
  );
};

export default DcScreen;