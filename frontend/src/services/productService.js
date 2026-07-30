import api from "../api/axios";

export const getProducts = async (page = 1) => {
    const response = await api.get(`products/?page=${page}`);

    console.log("PRODUCT SERVICE RESPONSE:", response.data);

    return response.data;
};

export const getProduct = async (id) => {
    const response = await api.get(`products/${id}/`);
    return response.data;
};