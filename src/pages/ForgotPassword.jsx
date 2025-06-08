import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://loginpro-8.onrender.com/api/forgot-password', {
        email,
      });
      setMessage(res.data.message || 'Password reset link sent!');
      console.log('Forgot password response:', res.data);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Failed to send reset link');
      console.error('Forgot password error:', err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p className="info-message">{message}</p>}
      <p>
        Remembered? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
