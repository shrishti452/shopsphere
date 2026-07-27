export const isAuthenticated = () => {
    return localStorage.getItem("access") !== null;
};

export const getToken = () => {
    return localStorage.getItem("access");
};

export const logout = () => {

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
};