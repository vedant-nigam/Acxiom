// VendorsPage.js
import React from 'react';

function VendorsPage() {
    const vendors = [
        { id: 1, name: 'Vendor A', products: ['Product 1', 'Product 2', 'Product 3'] },
        { id: 2, name: 'Vendor B', products: ['Product 4', 'Product 5'] },
        { id: 3, name: 'Vendor C', products: ['Product 6', 'Product 7', 'Product 8'] }
    ];

    return (
        <div>
            <h2>Vendors</h2>
            <ul>
                {vendors.map(vendor => (
                    <li key={vendor.id}>
                        <h3>{vendor.name}</h3>
                        <ul>
                            {vendor.products.map((product, index) => (
                                <li key={index}>{product}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VendorsPage;
