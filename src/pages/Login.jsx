import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";  

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (password.trim() === "") {
      setError("Please enter your password.");
      return;
    }

    setError("");

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      email,
      password,
    })
    .then((response) => {
      alert("Login successful!");
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Login error:", error.response || error.message);
      alert("Login failed. Please check your credentials.");
    });
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {error && <p className="error-msg">{error}</p>}
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </form>

      <div className="auth-footer">
        <Link to="/forgot-password">Forgot Password?</Link>
        <br />
        <Link to="/register">Don't have an account? Register</Link>
      </div>
    </div>
  );
}
