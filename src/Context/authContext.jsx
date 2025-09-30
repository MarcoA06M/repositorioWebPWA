import { useEffect, useState, createContext, useContext } from "react";
import * as authUtils from "../utils/auth";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [registerMessage, setRegisterMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const checkAuth = () => {
      if (authUtils.isAuthenticated()) {
        const currentUser = authUtils.getCurrentUser();
        setUser(currentUser);
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Registro
  const signup = async (userData) => {
    try {
      const result = authUtils.register(userData);
      
      if (result.success) {
        setUser(result.user);
        setIsAuthenticated(true);
        setRegisterMessage(result.message[0]);
        return { success: true };
      } else {
        setErrors(result.message);
        return { success: false };
      }
    } catch (error) {
      setErrors(["Error de registro"]);
      return { success: false };
    }
  };

  // Login
  const signin = async (userData) => {
    try {
      const result = authUtils.login(userData.email, userData.password);
      
      if (result.success) {
        setUser(result.user);
        setIsAuthenticated(true);
        setRegisterMessage(result.message[0]);
        return { success: true };
      } else {
        setErrors(result.message);
        return { success: false };
      }
    } catch (error) {
      setErrors(["Error de autenticación"]);
      return { success: false };
    }
  };

  // Logout
  const logout = () => {
    authUtils.logout();
    setUser(null);
    setIsAuthenticated(false);
    setRegisterMessage(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
        isAuthenticated,
        errors,
        loading,
        registerMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;