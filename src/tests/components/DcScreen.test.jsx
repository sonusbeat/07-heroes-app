import { shallow } from "enzyme";
import DcScreen from "../../components/dc/DcScreen";

describe("Puebas en el componente <DcScreen />", () => {
  test("Debe coincidir con el Snapshot", () => {

    const wrapper = shallow( <DcScreen /> );
    expect( wrapper ).toMatchSnapshot();

  });
});