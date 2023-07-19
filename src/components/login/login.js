import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/Accounts/AuthContext';


const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  const handleLogin = (event) => {
    event.preventDefault();

    if (id && password) {
      login(id, password);
    } else {
      setError('Please enter ID and password');
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  if (isAuthenticated) {
    navigate('/components/Accounts/student/StudentsPortal'); // Redirect to the dashboard or desired page if already authenticated
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>ID:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default LoginPage;
