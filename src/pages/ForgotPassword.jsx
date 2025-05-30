import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";  

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      setMessage("");
      return;
    }

    setError("");
    setMessage("");

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/forgot-password`, {
      email,
    })
    .then((response) => {
      setMessage("If this email exists in our system, you will receive a password reset link.");
    })
    .catch((error) => {
      console.error("Forgot password error:", error.response || error.message);
      setError("Failed to send reset link. Please try again.");
    });
  }

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {error && <p className="error-msg">{error}</p>}
        {message && <p className="success-msg">{message}</p>}

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <button type="submit">Send Reset Link</button>
      </form>

      <div className="auth-footer">
        <Link to="/login">Back to Login</Link>
      </div>
    </div>
  );
}
