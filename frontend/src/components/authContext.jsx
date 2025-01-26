
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state for initial authentication check
  const api_base_url=process.env.REACT_APP_API_URL

  // Fetch the user data
  const fetchCurrentUser = async () => {
    try {
      console.log("Fetching current user...");
      const response = await fetch(`${api_base_url}/users/me}`, {
        method: "GET",
        credentials: "include", // Sends cookies with the request
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User data fetched:", data);
        setUser(data.data); // Set the authenticated user
      } else {
        setUser(null); // No user logged in
      }
    } catch (error) {
      console.error("Error verifying user:", error);
      setUser(null);
    } finally {
      setLoading(false); // Authentication check complete
    }
  };

  // Fetch user on component mount
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading,setLoading, fetchCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

