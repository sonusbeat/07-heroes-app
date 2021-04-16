import authReducer from "../../../auth/authReducer";
import types from '../../../types/types';

// const state = {
//   name: "Daniel",
//   logged: true
// };

describe("Puebas en authReducer", () => {

  test("Debe de retornar el estado por defecto", () => {

    const initialState = { logged: false };

    const state = authReducer( initialState, {} );

    expect( state ).toEqual( initialState );

  });

  test("Debe de autenticar y colocar el name del usuario", () => {

    const action = {
      type: types.login,
      payload: {
        name: "Daniel"
      }
    };

    const initialState = { logged: false };

    const state = authReducer( initialState, action );

    expect( state ).toEqual({
      logged: true,
      name: "Daniel"
    });

  });

  test("Debe de debe de borrar el name del usuario en false", () => {

    const action = {
      type: types.logout,
    };

    const initialState = {
      logged: true,
      name: "Daniel"
    };

    const state = authReducer( initialState, action );

    expect( state ).toEqual( { logged: false } );

  });
});