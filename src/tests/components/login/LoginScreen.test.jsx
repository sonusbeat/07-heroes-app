import { mount } from 'enzyme';
import AuthContext from '../../../auth/AuthContext';

import LoginScreen from '../../../components/login/LoginScreen';
import types from '../../../types/types';

describe('Pruebas en el componente <LoginScreen />', () => {

  const history = {
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  };

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <LoginScreen history={ history } />
    </AuthContext.Provider>
  );

  test('Deberia de mostrarse correctamente', () => {

    expect( wrapper.html() ).toMatchSnapshot();

  });

  test('Deberia de disparar el dispatch y la navegación', () => {

    // Guardar la referencia handleClick
    const handleClick = wrapper.find("button").prop("onClick");

    // Simular el boton con onClick
    handleClick();

    // Simular el contextValue con dispatch
    expect( contextValue.dispatch ).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Daniel"
      }
    });

    // Llamar el history.replace
    expect( history.replace ).toHaveBeenCalled();

    // Crear un localStorage
    localStorage.setItem('lastPath', '/dc');

    // Llamar la función handleClick otra vez para guardar el
    // localStorage
    handleClick();

    // Revizar si el modo history se llamo el método replace
    // con el argumento especificado
    expect( history.replace ).toHaveBeenCalledWith("/dc");

  });

});
