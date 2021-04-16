import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import PrivateRoute from '../../../routers/PrivateRoute';

describe("Puebas en <PrivateRoute />", () => {

  const props = {
    location: {
      pathname: "/marvel"
    }
  };

  test("Debe de mostrar el componente si está autenticado y guardar el LocaStorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={ true }
          component={ () => <p>Ready!</p> }
          { ...props }
        />
      </MemoryRouter>
    );

    expect( wrapper.find("p").exists() ).toBe(true);

  });


});