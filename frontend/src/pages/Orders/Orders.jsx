import { useEffect, useState } from "react";
import "./Orders.css";
import {
    getOrders,
    cancelOrder,
} from "../../services/orderService";
import { toast } from "react-toastify";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        try {
            const data = await getOrders();
            setOrders(data.results || []);
        } catch (err) {
            console.error(err);
            setOrders([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handleCancel = async (id) => {
        try {
            const updatedOrder = await cancelOrder(id);

            setOrders((prev) =>
                prev.map((order) =>
                    order.id === id
                        ? updatedOrder
                        : order
                )
            );

            toast.success(
                "Order cancelled successfully."
            );
        } catch (err) {
            console.error(err);

            toast.error(
                err.response?.data?.message ||
                "Unable to cancel order."
            );
        }
    };

    if (loading) {
        return (
            <div className="orders-page">
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <section className="orders-page">
            <h1>My Orders</h1>

            {orders.length === 0 ? (
                <h2 className="empty-orders">
                    No Orders Found
                </h2>
            ) : (
                <div className="orders-container">
                    {orders.map((order) => (
                        <div
                            className="order-card"
                            key={order.id}
                        >
                            <div className="order-header">
                                <h2>
                                    Order #{order.id}
                                </h2>

                                <span
                                    className={`status ${order.status.toLowerCase()}`}
                                >
                                    {order.status}
                                </span>
                            </div>

                            <p>
                                Date:{" "}
                                {new Date(
                                    order.created_at
                                ).toLocaleDateString()}
                            </p>

                            <div className="order-items">
                                {(order.items || [])
                                    .length > 0 ? (
                                    order.items.map(
                                        (item) => (
                                            <div
                                                className="order-item"
                                                key={
                                                    item.id
                                                }
                                            >
                                                <img
                                                    src={
                                                        item
                                                            .product
                                                            .image
                                                    }
                                                    alt={
                                                        item
                                                            .product
                                                            .title
                                                    }
                                                />

                                                <div>
                                                    <h4>
                                                        {
                                                            item
                                                                .product
                                                                .title
                                                        }
                                                    </h4>

                                                    <p>
                                                        Qty:{" "}
                                                        {
                                                            item.quantity
                                                        }
                                                    </p>

                                                    <p>
                                                        ₹
                                                        {
                                                            item.price
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    )
                                ) : (
                                    <p>
                                        No items
                                        found.
                                    </p>
                                )}
                            </div>

                            <h3>
                                Total: ₹
                                {order.total_price}
                            </h3>

                            {order.status ===
                                "Pending" && (
                                    <div className="order-actions">
                                        <button
                                            className="cancel-order-btn"
                                            onClick={() => handleCancel(order.id)}
                                        >
                                            Cancel Order
                                        </button>
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Orders;