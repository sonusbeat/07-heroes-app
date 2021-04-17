import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import AuthContext from '../../../auth/AuthContext';
import Navbar from '../../../components/ui/Navbar';
import types from '../../../types/types';

describe("Pruebas en el componente <Navbar />", () => {
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Daniel"
    }
  };

  afterEach(() => {
    jest.clearAllMocks()
  });

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter>
        <Router history={ historyMock }>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('Debe coincidir con el Snapshot', () => {

    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe de mostrarse el nombre de usuario en el menu', () => {

    expect( wrapper.find(".text-info").text().trim() ).toBe( contextValue.user.name );

  });


  test('Debe de llamar el logout y usar el history', () => {

    wrapper.find("button").prop("onClick")();

    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.logout
    });

    expect( historyMock.replace ).toHaveBeenCalledWith("/login");

  });

});
