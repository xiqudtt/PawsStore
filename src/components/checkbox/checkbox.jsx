import React from 'react'
import './checkbox.css'

const Checkbox = ({ option, setRating, value, activeRating }) => {
    const toggleFilter = (e) => {
        setRating(e.target.checked ? value : 0);
    };

    return (
        <div className="catalog__filter-checkbox">
            <input
                className="catalog__filter-input"
                type="checkbox"
                checked={activeRating === value}
                onChange={toggleFilter}
            />
            <p className="catalog__filter-text">{option}</p>
        </div>
    )
}

export default Checkbox;