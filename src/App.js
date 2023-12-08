import React, { useState } from 'react';
import LoginForm from './LoginForm';
import WeatherSearch from './WeatherSearch';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'demo' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
       
        <WeatherSearch />
      )}
    </div>
  );
};

export default App;
