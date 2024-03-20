import React, { useState } from 'react';
import { vendorData } from '../../data/vendorData';

function YourItemsPage() {
    const [items, setItems] = useState(vendorData);
    const handleDelete = (itemId) => {
        const newData = items.filter(e => e.id != itemId);
        setItems(newData);
    };

    return (
        <div>
            <h2>Your Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <div style={{ fontWeight: 'bold', fontSize: 15 }}>{item.name} - ${item.price}</div>
                        <button className='custom-button' onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default YourItemsPage;
