import "./cartProgress.css";
import React from 'react'
import { HiOutlineTag } from "react-icons/hi2";
import { useLocation } from "react-router-dom";

const CartProgress = () => {
    const status = "✓ Qualified!";

    return (
        <div className="progress">
            <div className="container">
                <div className="progress__steps">
                    <div className="progress__steps-left">
                        <h2 className="progress__steps-title">Shopping Bag</h2>
                        <p className="progress__steps-text">1 item ready for checkout</p>
                    </div>
                    <div className="progress__steps-right">
                        <ol className="progress__steps-list">
                            <li className="progress__steps-item--active">
                                <div className="progress__steps-border">
                                    <span className="progress__steps-num">1</span>
                                </div>
                                <p className="progress__steps-name">Cart</p>
                                <svg className="progress__steps-svg lucide lucide-chevron-right w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                            </li>
                            <li className="progress__steps-item">
                                <div className="progress__steps-border">
                                    <span className="progress__steps-num">2</span>
                                </div>
                                <p className="progress__steps-name">Checkout</p>
                                <svg className="progress__steps-svg lucide lucide-chevron-right w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                            </li>
                            <li className="progress__steps-item">
                                <div className="progress__steps-border">
                                    <span className="progress__steps-num">3</span>
                                </div>
                                <p className="progress__steps-name">Complete</p>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="progress__promotion">
                    <div className="progress__promotion-left">
                        <HiOutlineTag className="progress__promotion-icon" />
                        <p className="progress__promotion-text">Free shipping on orders over <span className="progress__promotion-price">$50</span></p>
                    </div>
                    <div className="progress__promotion-right">
                        <p className="progress__promotion-status">{status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProgress;