import './range.css';

const Range = ({ title1, title2, filters, setFilters }) => {
    const handlePriceChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            priceRange: { ...prev.priceRange, [key]: value }
        }));
    };
    
    return (
        <div className="catalog__filter-range">
            <div className="catalog__filter-min">
                <h4 className="catalog__filter-size">{title1}</h4>
                <input
                    value={filters.priceRange.min}
                    onChange={(e) => handlePriceChange("min", e.target.value)}
                    type="text"
                    className="catalog__filter-count"
                />
            </div>
            <span className="catalog__filter-blank">-</span>
            <div className="catalog__filter-max">
                <h4 className="catalog__filter-size">{title2}</h4>
                <input
                    value={filters.priceRange.max}
                    onChange={(e) => handlePriceChange("max", e.target.value)}
                    type="text"
                    className="catalog__filter-count"
                />
            </div>
        </div>
    )
}

export default Range;