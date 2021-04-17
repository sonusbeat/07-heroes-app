import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import HeroScreen from '../../../components/heroes/HeroScreen';

describe('Pruebas en el componente <HeroScreen />', () => {
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

  test('Debe de mostrarse el componente redirect si no hay argumentos en el URL', () => {

    expect( wrapper.find("Redirect").exists() ).toBe( true );

  });

});
