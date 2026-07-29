import api from "../api/axios";

export const getOrders = async () => {
    const response = await api.get("orders/");
    return response.data;
};

export const checkout = async () => {
    const response = await api.post("orders/checkout/");
    return response.data;
};