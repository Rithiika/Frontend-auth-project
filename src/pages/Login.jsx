import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
    // Here you would send data to backend (not your task)
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
