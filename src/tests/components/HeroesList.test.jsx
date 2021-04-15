import { shallow } from "enzyme";
import HeroesList from '../../components/heroes/HeroesList';

describe("Puebas en el componente <HeroesList />", () => {
  test("Debe coincidir con el Snapshot", () => {

    const publisher = "Marvel Comics";
    const wrapper = shallow( <HeroesList publisher={ publisher } /> );
    expect( wrapper ).toMatchSnapshot();

  });
});