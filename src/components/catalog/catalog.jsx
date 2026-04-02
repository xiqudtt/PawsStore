import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './catalog.css';

const Catalog = () => {
    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__inner">
                    <div className="catalog__filter">
                        <h2 className="catalog__filter-logo">Filters</h2>
                        <div className="catalog__filter-options">
                            <div className="catalog__filter-rating">
                                <h3 className="catalog__filter-title">Rating</h3>
                                <div className="catalog__filter-checkboxes">
                                    <div className="catalog__filter-checkbox">
                                        <input type="checkbox" className="catalog__filter-input" />
                                        <p className="catalog__filter-text">5+ Stars</p>
                                    </div>
                                    <div className="catalog__filter-checkbox">
                                        <input type="checkbox" className="catalog__filter-input" />
                                        <p className="catalog__filter-text">4+ Stars</p>
                                    </div>
                                    <div className="catalog__filter-checkbox">
                                        <input type="checkbox" className="catalog__filter-input" />
                                        <p className="catalog__filter-text">3+ Stars</p>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__filter-price">
                                <h3 className="catalog__filter-title">Price Range</h3>
                                <div className="catalog__filter-range">
                                    <div className="catalog__filter-min">
                                        <h4 className="catalog__filter-size">Min</h4>
                                        <input value={0} type="text" className="catalog__filter-count" />
                                    </div>
                                    <div className="catalog__filter-max">
                                        <h4 className="catalog__filter-size">Max</h4>
                                        <input value={100} type="text" className="catalog__filter-count" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="catalog__search">
                        <p className="catalog__search-count">0 products</p>
                        <div className="catalog__sort">
                            <p className="catalog__sort-title">Sort by:</p>
                            <select name="" id="" className="catalog__sort-select">
                                <option value="" className="catalog__sort-option">Name (A-Z)</option>
                                <option value="" className="catalog__sort-option">Rating (0-5)</option>
                                <option value="" className="catalog__sort-option">Price</option>
                            </select>
                        </div>
                    </div>

                    <div className="catalog__cards">
                        <div className="catalog__cards-item">
                            <div className="catalog__cards-presentation catalog__cards-presentation--1">
                                <p className="catalog__cards-price">$54.99</p>
                            </div>
                            <h2 className="catalog__cards-title">Airline-Approved Pet Travel Carrier</h2>
                            <div className="catalog__rating">
                                <div className="catalog__rating-icons">
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiOutlineStar className="catalog__rating-icon" />
                                </div>
                                <p className="catalog__rating-count">(4)</p>
                            </div>
                        </div>

                        <div className="catalog__cards-item">
                            <div className="catalog__cards-presentation catalog__cards-presentation--2">
                                <p className="catalog__cards-price">$54.99</p>
                            </div>
                            <h2 className="catalog__cards-title">Airline-Approved Pet Travel Carrier</h2>
                            <div className="catalog__rating">
                                <div className="catalog__rating-icons">
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiOutlineStar className="catalog__rating-icon" />
                                </div>
                                <p className="catalog__rating-count">(4)</p>
                            </div>
                        </div>

                        <div className="catalog__cards-item">
                            <div className="catalog__cards-presentation catalog__cards-presentation--3">
                                <p className="catalog__cards-price">$54.99</p>
                            </div>
                            <h2 className="catalog__cards-title">Airline-Approved Pet Travel Carrier</h2>
                            <div className="catalog__rating">
                                <div className="catalog__rating-icons">
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiOutlineStar className="catalog__rating-icon" />
                                </div>
                                <p className="catalog__rating-count">(4)</p>
                            </div>
                        </div>

                        <div className="catalog__cards-item">
                            <div className="catalog__cards-presentation catalog__cards-presentation--4">
                                <p className="catalog__cards-price">$54.99</p>
                            </div>
                            <h2 className="catalog__cards-title">Airline-Approved Pet Travel Carrier</h2>
                            <div className="catalog__rating">
                                <div className="catalog__rating-icons">
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiFillStar className="catalog__rating-icon" />
                                    <AiOutlineStar className="catalog__rating-icon" />
                                </div>
                                <p className="catalog__rating-count">(4)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog;