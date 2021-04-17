import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';

import HeroScreen from '../../../components/heroes/HeroScreen';
import getHeroById from '../../../components/selectors/getHeroById';

describe('Pruebas en el componente <HeroScreen />', () => {

  test('Debe de mostrarse el componente redirect si no hay argumentos en el URL', () => {

    const history = {
      length: 10,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={ history } />
      </MemoryRouter>
    );

    expect( wrapper.find("Redirect").exists() ).toBe( true );

  });

  test("Debe de mostrar un hero si el parámetro existe y se encuentra", () => {
    const id = "marvel-spider";
    const { superhero } = getHeroById(id);

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroId" component={ HeroScreen } />
      </MemoryRouter>
    );

    expect(wrapper.find("h2").text().trim()).toBe( superhero );

  });

  test("Debe de regresar a la pantalla anterior con PUSH", () => {

    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={ () => <HeroScreen history={ history } /> }
        />
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect( history.push ).toHaveBeenCalledWith("/");
    expect( history.goBack ).not.toHaveBeenCalled();

  });

  test("Debe de regresar a la pantalla anterior con GOBACK", () => {

    const history = {
      length: 10,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={ () => <HeroScreen history={ history } /> }
        />
      </MemoryRouter>
    );

    wrapper.find("button").prop("onClick")();

    expect( history.goBack ).toHaveBeenCalled();
    expect( history.push ).toHaveBeenCalledTimes(0);

  });

  test("Debe de llamar el redirect si el hero no existe", () => {

    const history = { length: 10 };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider123']}>
        <Route
          path="/hero/:heroId"
          component={ () => <HeroScreen history={ history } /> }
        />
      </MemoryRouter>
    );

    expect( wrapper.text() ).toBe("");

  });

});
