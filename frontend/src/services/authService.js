import api from "../api/axios";

export const loginUser = async (username, password) => {
    const response = await api.post("accounts/login/", {
        username,
        password,
    });

    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);

    window.dispatchEvent(new Event("authChanged"));

    return response.data;
};

export const registerUser = async (userData) => {
    const response = await api.post(
        "accounts/register/",
        userData
    );

    return response.data;
};

export const logoutUser = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    window.dispatchEvent(new Event("authChanged"));
};