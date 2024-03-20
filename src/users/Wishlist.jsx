// WishlistPage.js
import React, { useState } from 'react';

function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState([
        { id: 1, name: 'Product 4', price: 40 },
        { id: 2, name: 'Product 5', price: 50 }
    ]);

    const handleClearWishlist = () => {
        setWishlistItems([]);
    };

    return (
        <div>
            <h2>Wishlist</h2>
            <ul>
                {wishlistItems.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <button onClick={handleClearWishlist}>Clear Wishlist</button>
        </div>
    );
}

export default WishlistPage;
