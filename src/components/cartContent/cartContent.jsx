import "./cartContent.css";
import React from 'react';
import { HiOutlineTag } from "react-icons/hi2";
import { LuTrash2 } from "react-icons/lu";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlineCreditCard } from "react-icons/hi";

const CartContent = ({ cards }) => {
    return (
        <div className="cart">
            <div className="container">
                <div className="cart__inner">
                    <ul className="cart__prods-list">
                        {cards.map((card, idx) =>
                            <li key={card.id || idx} className="cart__prods-item">
                                <img className="cart__prods-img" src={card.img[0]} alt="" />
                                <div className="cart__prods-info">
                                    <h3 className="cart__prods-title">{card.title}</h3>
                                    <p className="cart__prods-text">Toys & Scratchers</p>
                                </div>
                                <div className="cart__prods-price">
                                    <p className="cart__prods-price-text1">${card.price}</p>
                                    <p className="cart__prods-price-text2">${card.price} each</p>
                                </div>
                                <button className="cart__prods-remove">
                                    <LuTrash2 className="cart__prods-icon"/>
                                </button>
                            </li>
                        )}
                    </ul>
                    <div className="order-summary">
                        <div class="order-summary__header">
                            <h2 class="order-summary__title">Order Summary</h2>
                            <p class="order-summary__count">1 items in your bag</p>
                        </div>
                        <div class="order-summary__body">
                            <div class="order-summary__promo promo-code">
                                <div class="promo-code__label">
                                    <HiOutlineTag className="promo-code__icon" />
                                    <p className="promo-code__text">Promo Code</p>
                                </div>
                                <form class="promo-code__form">
                                    <input type="text" class="promo-code__input" placeholder="Enter code" />
                                    <button type="button" class="promo-code__button">Apply</button>
                                </form>
                            </div>

                            <div class="order-summary__details">
                                <div class="order-summary__row">
                                    <span class="order-summary__label">Subtotal</span>
                                    <span class="order-summary__value">$15.99</span>
                                </div>
                                <div class="order-summary__row">
                                    <span class="order-summary__label">Tax (8%)</span>
                                    <span class="order-summary__value">$1.28</span>
                                </div>
                                <div class="order-summary__row order-summary__row--total">
                                    <span class="order-summary__total-label">Total</span>
                                    <span class="order-summary__total-value">$17.27</span>
                                </div>
                            </div>


                            <div class="order-summary__info-cards">
                                <div class="info-card info-card--delivery">
                                    <div class="info-card__wrapper">
                                        <AiOutlineClockCircle className="info-card__icon" />
                                    </div>
                                    <div class="info-card__content">
                                        <h4 class="info-card__title">Delivery Time</h4>
                                        <p class="info-card__text">3-5 business days</p>
                                    </div>
                                </div>

                                <div class="info-card info-card--shipping">
                                    <div class="info-card__wrapper">
                                        <HiOutlineLocationMarker className="info-card__icon" />
                                    </div>
                                    <div class="info-card__content">
                                        <h4 class="info-card__title">Shipping To</h4>
                                        <p class="info-card__text">123 Main Street, NY 10001</p>
                                    </div>
                                </div>
                            </div>

                            <div class="order-summary__actions">
                                <button class="order-summary__btn-checkout">
                                    <HiOutlineCreditCard className="order-summary__btn-icon" />
                                    <span className="order-summary__btn-text">Proceed to Checkout</span>
                                </button>
                                <button class="order-summary__btn-continue">
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