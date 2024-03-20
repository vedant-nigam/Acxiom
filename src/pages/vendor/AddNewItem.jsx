import React, { useState } from 'react';
import { vendorData } from '../../data/vendorData';
import { v4 } from "uuid";
import { useNavigate } from 'react-router-dom';

function AddNewItemPage() {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setItemName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setItemPrice(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            id: v4(),
            name: itemName,
            price: itemPrice,
        }
        vendorData.push(newData);
        navigate("/vendor/your-items")
    };

    return (
        <div>
            <h2 style={{ textAlign: "center", marginTop: 100 }}>Add New Item</h2>
            <form className='main' onSubmit={handleSubmit}>
                <div className='inputs'>
                    <label className='lbl'>Name:</label>
                    <input type="text" value={itemName} onChange={handleNameChange} />
                </div>
                <div className='inputs'>
                    <label className='lbl'>Price:</label>
                    <input type="text" value={itemPrice} onChange={handlePriceChange} />
                </div>
                <button className='custom-button' type="submit">Add Item</button>
            </form>
        </div>
    );
}

export default AddNewItemPage;
