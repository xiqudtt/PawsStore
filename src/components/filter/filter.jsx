import { FiX } from "react-icons/fi";
import FilterOption from '../filterOption/filterOption';
import './filter.css';

const Filter = ({ filters, setFilters, toggleFilter, setToggleFilter }) => {
    return (
        <div className={"catalog__filter " + (toggleFilter ? "catalog__filter--active" : "")}>
            <div className="catalog__filter-top">
                <h2 className="catalog__filter-logo">Filters</h2>
                <FiX className="catalog__filter-icon" onClick={() => setToggleFilter(false)} />
            </div>
            <div className="catalog__filter-options">
                <FilterOption type="checkbox" title="Rating" filters={filters} setFilters={setFilters} />
                <FilterOption type="range" title="Price Range" filters={filters} setFilters={setFilters} />
            </div>
        </div>
    )
}

export default Filter;