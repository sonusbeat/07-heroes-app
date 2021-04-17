import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import PublicRoute from '../../routers/PublicRoute';

describe('Pruebas en <PublicRoute />', () => {

  const props = {
    location: {
      pathName: "/marvel"
    }
  };

  test('Debe de mostrar el componente', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute
          isAuthenticated={ false }
          component={ () => <p> Ready! </p> }
          { ...props }
        />
      </MemoryRouter>
    );

    const p = wrapper.find("p");

    expect( p.exists() ).toBe(true);
    expect( p.text().trim() ).toBe("Ready!");
  });

});
