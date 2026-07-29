import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = () => {
        const token = localStorage.getItem("access");
        setIsAuthenticated(!!token);
    };

    const login = (access, refresh) => {
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        setIsAuthenticated(true);
    };

    const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
};

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logout,
                checkAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);