import React from 'react';
import '../index.css';

function Button({ onClick, children }) {
    return (
        <button className="custom-button" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;