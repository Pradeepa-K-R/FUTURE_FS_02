import { useState } from "react";
import "./login.css";

const Register = ({ onRegister, goToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple demo register
    localStorage.setItem("user", JSON.stringify({ email, password }));
    onRegister();
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>

        <p className="switch">
          Already have an account?{" "}
          <span onClick={goToLogin}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
