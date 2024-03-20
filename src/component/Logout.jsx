import React from 'react';
import '../index.css';
import { logout } from '../data/getToken';

function Logout({ onClick }) {
    return (
        <button className="custom-button" onClick={() => {
            logout(onClick);
        }}>
            {"Logout"}
        </button>
    );
}

export default Logout;