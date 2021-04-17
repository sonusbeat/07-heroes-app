import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import AuthContext from '../../../auth/AuthContext';
import DashboardRoutes from '../../../routers/DashboardRoutes';


describe("Pruebas en el componente <DashboardRoutes />", () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Daniel"
    }
  };

  Storage.prototype.setItem = jest.fn();

  test('Deberia coincidir con el Snapshot', () => {
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe( contextValue.user.name );

  });

});