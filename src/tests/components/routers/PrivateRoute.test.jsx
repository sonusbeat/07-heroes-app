import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import PrivateRoute from '../../../routers/PrivateRoute';

describe("Puebas en <PrivateRoute />", () => {

  const props = {
    location: {
      pathname: "/marvel"
    }
  };

  // Set Item with LocalStorage
  Storage.prototype.setItem = jest.fn();

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
    expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/marvel");

  });


  test("Debe de bloquear el componente si no está autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={ false }
          component={ () => <p>Ready!</p> }
          { ...props }
        />
      </MemoryRouter>
    );

    expect( wrapper.html() ).toBe( "" );
    expect( wrapper.find("p").exists() ).toBe( false );
    expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/marvel");

  });
});