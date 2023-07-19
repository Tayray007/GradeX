import React, { createContext, useState } from 'react';
import { userAccountDetails } from '../components/data'; // Import the user account details
import { navigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (id, password) => {
    // Check if the provided credentials match any user in the data file
    const user = userAccountDetails.find(
      (account) => account.id === id && account.password === password
    );

    if (user) {
      // Check the user role and redirect accordingly
      if (user.role === 'student') {
        // Redirect to student dashboard and sidebar
        navigate('/students/dashboard');
        navigate('/students/sidebar');
      } else if (user.role === 'lecturer') {
        // Redirect to lecturer dashboard and sidebar
        navigate('/lecturers/dashboard');
        navigate('/lecturers/sidebar');
      }

      // Mark the user as authenticated
      setIsAuthenticated(true);
    } else {
      // Invalid credentials
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    // Implement your logout logic here
    // Clear any authentication tokens or session data
    setIsAuthenticated(false);
  };

  const authContextValue = {
    isAuthenticated,
    login: handleLogin,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
