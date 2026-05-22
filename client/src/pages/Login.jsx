function Login() {
  const handleLogin = () => {
    localStorage.setItem("user", "true");

    alert("User Login Successful");

    window.location.href = "/home";
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>User Login</h1>

      <input type="email" placeholder="Email" />

      <br />
      <br />

      <input type="password" placeholder="Password" />

      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;