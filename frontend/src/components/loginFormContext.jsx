import React, { createContext, useContext, useState } from 'react';

// Create Context
const LoginFormContext = createContext();

// Provider Component
export const LoginFormProvider = ({ children }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <LoginFormContext.Provider value={{ showLoginForm, setShowLoginForm }}>
      {children}
    </LoginFormContext.Provider>
  );
};

// Hook to use Login Form Context
export const useLoginForm = () => useContext(LoginFormContext);
