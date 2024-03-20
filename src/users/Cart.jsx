// CartPage.js
import React, { useState } from 'react';

function CartPage() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
    ]);

    const handleCheckout = () => {
        // Handle checkout process
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <button onClick={handleCheckout}>Checkout</button>
            <button onClick={handleClearCart}>Clear Cart</button>
        </div>
    );
}

export default CartPage;
