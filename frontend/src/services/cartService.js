import api from "../api/axios";

export const getCart = async () => {
    const response = await api.get("cart/");
    return response.data;
};

export const addToCartAPI = async (productId) => {
    const response = await api.post(`cart/add/${productId}/`, {
        quantity: 1,
    });
    return response.data;
};

export const updateCartAPI = async (cartId, quantity) => {
    const response = await api.put(`cart/update/${cartId}/`, {
        quantity,
    });
    return response.data;
};

export const deleteCartAPI = async (cartId) => {
    await api.delete(`cart/delete/${cartId}/`);
};