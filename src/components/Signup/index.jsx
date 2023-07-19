import React, { useState } from 'react';
import userAccountDetails from '../../data/userAccountDetails.json';
import { Box, Button, TextField, Typography } from '@mui/material';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();

    const existingUser = userAccountDetails.find((account) => account.id === id);
    if (existingUser) {
      setError('User with this ID already exists');
      return;
    }

    const newUser = { email, id, password };

    userAccountDetails.push(newUser);

    // Perform any necessary updates or API calls to update the user account details

    window.location.href = '/login';
  };

  return (
    <Box>
      <Typography variant="h2">Signup</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSignup}>
        <Box>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Box>
        <Box>
          <TextField
            label="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </form>
    </Box>
  );
};

export default SignupPage;
