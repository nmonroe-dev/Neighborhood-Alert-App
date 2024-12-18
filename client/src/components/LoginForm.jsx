import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";

function LoginForm() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4006/auth/login/", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setPassword("");
      setUsername("");
      nav("/home");
    } catch (error) {
      console.error("Unable to login", error);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            id="username"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
