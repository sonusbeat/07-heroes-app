const LoginScreen = ({ history }) => {

  const handleLogin = () => {
    history.push("/"); // <== Redirecciona a la ruta deseada
    // history.replace("/"); // <== Borra el history
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