import React, { useEffect } from 'react';
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import './Popup.css';

const Popup = ({ isVisible, message, onClose }) => {

    useEffect(() => {

        if (isVisible) {
            const timer = setTimeout(() => onClose(), 3000);
            return () => clearTimeout(timer);
        }
        
    }, [isVisible, onClose]);

    return (
        <div className={`add-to-cart-container ${isVisible ? 'active' : ''}`}>
            <IoCheckmarkCircleSharp size={24} className="add-to-cart-icon" />
            <span className="add-to-cart-message">
                {message}
            </span>
        </div>
    );
};

export default Popup;