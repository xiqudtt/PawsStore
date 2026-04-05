import './filter.css';
import FilterOption from '../filterOption/filterOption.jsx';

const Filter = ({ filters, setFilters }) => {
    return (
        <div className="catalog__filter">
            <h2 className="catalog__filter-logo">Filters</h2>
            <div className="catalog__filter-options">
                <FilterOption type="checkbox" title="Rating" filters={filters} setFilters={setFilters} />
                <FilterOption type="range" title="Price Range" filters={filters} setFilters={setFilters} />
            </div>
        </div>
    )
}

export default Filter;