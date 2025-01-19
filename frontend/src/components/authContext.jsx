import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state for initial authentication check

  // Fetch the user data when the app loads
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        console.log("this fetch user try block is executing");
        const response = await fetch("http://localhost:8000/api/v1/users/me", {
          method: "GET",
          credentials: "include", // Sends cookies with the request
        });

        if (response.ok) {
          const data = await response.json();
          console.log("this is data after reloading ",data);
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
    

    fetchCurrentUser();
  }, []);
  console.log("this is auth calling to verify",user);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
