import React from 'react';
import { Link } from 'react-router-dom';
import { LuShoppingBag, LuChevronRight } from 'react-icons/lu';
import './emptyCart.css';

const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <div className="container">
                <div className="empty-cart__content">
                    <div className="empty-cart__icon-wrapper">
                        <LuShoppingBag className="empty-cart__icon" />
                    </div>
                    <h2 className="empty-cart__title">Your cart is empty</h2>
                    <p className="empty-cart__text">Discover amazing products for your furry friends!</p>
                    <Link to="/" className="empty-cart__btn">
                        <span>Start Shopping</span>
                        <LuChevronRight className="empty-cart__btn-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;