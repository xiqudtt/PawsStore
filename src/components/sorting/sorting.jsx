import React, { useEffect, useState } from 'react'
import './sorting.css';

const Sorting = ({ count, sortType, setSortType }) => {

    return (
        <div className="catalog__sorting">
            <p className="catalog__sorting-count">{count} products</p>
            <div className="catalog__sort">
                <p className="catalog__sort-title">Sort by:</p>
                <div className="catalog__sort-select-wrapper">
                    <select value={sortType} onChange={(e) => setSortType(e.target.value)} className="catalog__sort-select">
                        <option value="name" className="catalog__sort-option">Name (A-Z)</option>
                        <option value="rating" className="catalog__sort-option">Rating (0-5)</option>
                        <option value="price" className="catalog__sort-option">Price</option>
                    </select>
                </div>
            </div>
        </div>
    )
    
}

export default Sorting;