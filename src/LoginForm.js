import React, { useState } from 'react';
import './LoginForm.css';
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <label htmlFor="username" className='label'>Username:</label>
      <input
        type="text"
        id="username"
        className='input'
        placeholder='Username...'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />
      <label htmlFor="password" className='label'>Password:</label>
      <input
        type="password"
        id="password"
        className='input'
        placeholder='Password...'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button className="button" type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
