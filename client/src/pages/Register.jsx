function Register() {
  const handleRegister = () => {
    alert("Registration Successful");

    window.location.href = "/login";
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Register</h1>

      <input placeholder="Name" />

      <br />
      <br />

      <input placeholder="Email" />

      <br />
      <br />

      <input type="password" placeholder="Password" />

      <br />
      <br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;