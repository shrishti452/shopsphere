import { useEffect, useState } from "react";
import api from "../../api/axios";
import "./Orders.css";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await api.get("orders/");
                setOrders(response.data);
            } catch (error) {
                console.error("Orders fetch failed", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <h2 className="orders-loading">Loading Orders...</h2>;
    }

    return (
        <section className="orders-page">

            <h1>My Orders</h1>

            {orders.length === 0 ? (
                <p className="empty-orders">
                    No orders found.
                </p>
            ) : (
                <div className="orders-container">

                    {orders.map((order) => (
                        <div className="order-card" key={order.id}>

                            <h3>
                                Order #{order.id}
                            </h3>

                            <p>
                                Status: {order.status}
                            </p>

                            <p>
                                Total: ₹{order.total_price}
                            </p>

                            <p>
                                Date: {new Date(order.created_at).toLocaleDateString()}
                            </p>

                        </div>
                    ))}

                </div>
            )}

        </section>
    );
};

export default Orders;