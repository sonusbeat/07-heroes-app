import { mount } from 'enzyme';
import AuthContext from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter';

describe("Pruebas en <AppRouter />", () => {

  test("Debería de mostrar de mostrar login si no esta autenticado", () => {

    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: false
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("Debería de mostrar el componente marvel si está autenticado", () => {

    const contextValue = {
      dispatch: jest.fn(),
      user: {
        name: "Daniel",
        logged: true
      }
    };

    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find(".navbar").exists()).toBe( true );

  });

});
