// OrdersPage.js
import React, { useState } from 'react';

function OrdersPage() {
    const [orders, setOrders] = useState([
        { id: 1, status: 'Processing', items: ['Product 1', 'Product 2'] },
        { id: 2, status: 'Shipped', items: ['Product 3', 'Product 4'] }
    ]);

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <div>Status: {order.status}</div>
                        <div>Items:
                            <ul>
                                {order.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrdersPage;
