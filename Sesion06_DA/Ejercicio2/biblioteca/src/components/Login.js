function Login({ handleLogin }) {
  return (
    <div className="login">
      <h2>Iniciar Sesión</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
