import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";
import types from '../../types/types';

const LoginScreen = ({ history }) => {

  const { dispatch } = useContext( AuthContext );

  const handleLogin = () => {
    // history.push("/"); // <== Redirecciona a la ruta deseada

    const action = {
      type: types.login,
      payload: {
        name: "Daniel"
      }
    };

    dispatch(action);

    history.replace("/"); // <== Borra el history
  };

  return (
    <section className="container mt-5">
      <h2>Login</h2>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >Acceder</button>
    </section>
  );
}

export default LoginScreen;