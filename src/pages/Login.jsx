import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://loginpro-15.onrender.com/api/login', {
        email,
        password,
      });

      // Display success with user's name
      const { token, user } = res.data;
      alert(`Welcome ${user.username || 'User'}! Login successful.`);
      console.log('Login response:', res.data);

    

    } catch (err) {
      console.error('Login error:', err);
      alert(err.response?.data?.error || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        New user? <Link to="/register">Register here</Link>
      </p>
      <p>
        Forgot password? <Link to="/forgot-password">Reset here</Link>
      </p>
    </div>
  );
};

export default Login;
