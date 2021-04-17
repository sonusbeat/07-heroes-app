import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';

import SearchScreen from '../../../components/search/SearchScreen';

describe('Pruebas en el componente <Search />', () => {

  test('Deberia mostrarse correctamente con valores por defecto', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route to="search" component={ SearchScreen } />
      </MemoryRouter>
    );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find(".alert-info").text().trim() ).toBe( "Search a Hero" );

  });

  test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
    const query = "batman";

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${query}`]}>
        <Route to="search" component={ SearchScreen } />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe( query );
    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe de mostrar la alerta que si no encontró el hero', () => {
    const query = "batasman";
    const alertMessage = `There is no a hero with the following query: "${query}"`;

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${query}`]}>
        <Route to="search" component={ SearchScreen } />
      </MemoryRouter>
    );

    expect( wrapper.find(".alert-danger").exists() ).toBe( true );
    expect( wrapper.find(".alert-danger").text().trim() ).toBe( alertMessage );
    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe de llamar el push del history', () => {
    const history = {
      push: jest.fn(),
    };

    const query = "ironman";

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${query}`]}>
        <Route
          to="search"
          component={ () => <SearchScreen history={ history } /> }
        />
      </MemoryRouter>
    );

    // Simulación cambio en la caja de texto
    wrapper.find("input").simulate('change', {
      name: "searchText",
      value: query
    });

    wrapper.find("form").prop("onSubmit")({
      preventDefault(){}
    });

    expect( history.push ).toHaveBeenCalledWith(`?q=${query}`);

  });


});
