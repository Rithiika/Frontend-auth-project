import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      setError("Please enter a password.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert(`Registering with\nEmail: ${email}\nPassword: ${password}`);
    // Backend integration handled by someone else
  }

  return (
    <div className="auth-container">
      <h2>Register</h2>
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

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
        />

        <button type="submit">Register</button>
      </form>

      <div className="auth-footer">
        <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
}
