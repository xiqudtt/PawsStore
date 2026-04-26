import "./cartContent.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Counter from "../counter/counter";
import { HiOutlineTag } from "react-icons/hi2";
import { LuTrash2, LuX } from "react-icons/lu";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlineCreditCard } from "react-icons/hi";
import { useCart } from "../../contexts/CartContext";
import EmptyCart from "../emptyCart/emptyCart";

const CartContent = () => {
    const navigate = useNavigate();
    const { prods, removeFromCart, updateQuantity } = useCart();
    const [promoCode, setPromoCode] = useState('');
    const [promoApplied, setPromoApplied] = useState(false);
    const [promoError, setPromoError] = useState('');

    const handleQuantityChange = (id, newQuantity) => {
        updateQuantity(id, newQuantity);
    };

    const handleProductClick = (prodId) => {
        navigate(`/product/${prodId}`);
    };

    const handleApplyPromo = (e) => {
        e.preventDefault();
        
        if (!promoCode.trim()) {
            setPromoError('Please enter a promo code');
            setTimeout(() => setPromoError(''), 3000);
            return;
        }
        
        if (promoCode.toUpperCase() === 'SAVE10') {
            setPromoApplied(true);
            setPromoError('');
        } else {
            setPromoApplied(false);
            setPromoError('Invalid promo code');
            setTimeout(() => setPromoError(''), 3000);
        }
    };

    const handleRemovePromo = () => {
        setPromoApplied(false);
        setPromoCode('');
    };

    const subtotal = prods.reduce((acc, prod) => acc + (prod.price * (prod.quantity || 1)), 0);
    const discount = promoApplied ? subtotal * 0.1 : 0;
    const tax = (subtotal - discount) * 0.08;
    const total = subtotal - discount + tax;
    const totalItems = prods.reduce((acc, prod) => acc + (prod.quantity || 1), 0);

    if (prods.length === 0) {
        return (
            <EmptyCart/>
        );
    }

    return (
        <div className="cart">
            <div className="container">
                <div className="cart__inner">
                    <ul className="cart__prods-list">
                        {prods.map((prod, idx) => (
                            <li key={prod.id || idx} className="cart__prods-item">
                                <div 
                                    className="cart__prods-box" 
                                    onClick={() => handleProductClick(prod.id)}
                                >
                                    <img className="cart__prods-img" src={prod.img[0]} alt="" />
                                    <div className="cart__prods-info">
                                        <h3 className="cart__prods-title">{prod.title}</h3>
                                        <p className="cart__prods-text">Toys & Scratchers</p>
                                    </div>
                                </div>
                                <Counter 
                                    count={prod.quantity || 1}
                                    onQuantityChange={(newQuantity) => handleQuantityChange(prod.id, newQuantity)}
                                />
                                <div className="cart__prods-price">
                                    <p className="cart__prods-price-text1">${(prod.price * (prod.quantity || 1)).toFixed(2)}</p>
                                    <p className="cart__prods-price-text2">${prod.price} each</p>
                                </div>
                                <button 
                                    className="cart__prods-remove"
                                    onClick={() => removeFromCart(prod.id)}
                                >
                                    <LuTrash2 className="cart__prods-icon" />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="order-summary">
                        <div className="order-summary__header">
                            <h2 className="order-summary__title">Order Summary</h2>
                            <p className="order-summary__count">{totalItems} {totalItems === 1 ? 'item' : 'items'} in your bag</p>
                        </div>
                        <div className="order-summary__body">
                            <div className="order-summary__promo promo-code">
                                <div className="promo-code__label">
                                    <HiOutlineTag className="promo-code__icon" />
                                    <p className="promo-code__text">Promo Code</p>
                                </div>
                                
                                {promoApplied ? (
                                    <div className="promo-code__applied">
                                        <div className="promo-code__applied-left">
                                            <div className="promo-code__check-circle">
                                                <span className="promo-code__check-mark">✓</span>
                                            </div>
                                            <div className="promo-code__applied-info">
                                                <p className="promo-code__applied-code">SAVE10</p>
                                                <p className="promo-code__applied-text">10% discount applied</p>
                                            </div>
                                        </div>
                                        <button onClick={handleRemovePromo} className="promo-code__remove">
                                            <LuX className="promo-code__remove-icon" />
                                        </button>
                                    </div>
                                ) : (
                                    <form className="promo-code__form" onSubmit={handleApplyPromo}>
                                        <input 
                                            type="text" 
                                            className="promo-code__input" 
                                            placeholder="Enter code" 
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value)}
                                        />
                                        <button type="submit" className="promo-code__button">Apply</button>
                                    </form>
                                )}
                                
                                {promoError && (
                                    <div className="promo-code__error">
                                        {promoError}
                                    </div>
                                )}
                            </div>

                            <div className="order-summary__details">
                                <div className="order-summary__row">
                                    <span className="order-summary__label">Subtotal</span>
                                    <span className="order-summary__value">${subtotal.toFixed(2)}</span>
                                </div>
                                
                                <div className="order-summary__row">
                                    <span className="order-summary__label">Tax (8%)</span>
                                    <span className="order-summary__value">${tax.toFixed(2)}</span>
                                </div>
                                
                                {promoApplied && (
                                    <div className="order-summary__row order-summary__row--discount">
                                        <span className="order-summary__label">Discount (10%)</span>
                                        <span className="order-summary__value discount-value">-${discount.toFixed(2)}</span>
                                    </div>
                                )}
                                
                                <div className="order-summary__row order-summary__row--total">
                                    <span className="order-summary__total-label">Total</span>
                                    <span className="order-summary__total-value">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="order-summary__info-cards">
                                <div className="info-card info-card--delivery">
                                    <div className="info-card__wrapper">
                                        <AiOutlineClockCircle className="info-card__icon" />
                                    </div>
                                    <div className="info-card__content">
                                        <h4 className="info-card__title">Delivery Time</h4>
                                        <p className="info-card__text">3-5 business days</p>
                                    </div>
                                </div>

                                <div className="info-card info-card--shipping">
                                    <div className="info-card__wrapper">
                                        <HiOutlineLocationMarker className="info-card__icon" />
                                    </div>
                                    <div className="info-card__content">
                                        <h4 className="info-card__title">Shipping To</h4>
                                        <p className="info-card__text">123 Main Street, NY 10001</p>
                                    </div>
                                </div>
                            </div>

                            <div className="order-summary__actions">
                                <button className="order-summary__btn-checkout">
                                    <HiOutlineCreditCard className="order-summary__btn-icon" />
                                    <span className="order-summary__btn-text">Proceed to Checkout</span>
                                </button>
                                <button onClick={() => navigate('/')} className="order-summary__btn-continue">
                                    ← Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContent;