import './sorting.css';
import { FiSliders } from "react-icons/fi";

const Sorting = ({ count, sortType, setSortType, toggleFilter, setToggleFilter }) => {

    return (
        <div className="catalog__sorting">
            <div className="catalog__sorting-left-side">
                <button className={"catalog__sorting-button " + (toggleFilter ? "catalog__sorting-button--active" : "")} onClick={() => setToggleFilter(!toggleFilter)}>
                    <FiSliders className="catalog__sorting-icon" />
                    <h2 className="catalog__sorting-title">Filters</h2>
                </button>
                <p className="catalog__sorting-count">{count} products</p>
            </div>
            <div className="catalog__sort">
                <p className="catalog__sort-title">Sort by:</p>
                <div className="catalog__sort-select-wrapper">
                    <select value={sortType} onChange={(e) => setSortType(e.target.value)} className="catalog__sort-select">
                        <option value="name(a-z)" className="catalog__sort-option">Name (A-Z)</option>
                        <option value="name(z-a)" className="catalog__sort-option">Name (Z-A)</option>
                        <option value="priceLowToHigh" className="catalog__sort-option">Price (Low to High)</option>
                        <option value="priceHighToLow" className="catalog__sort-option">Price (High to Low)</option>
                    </select>
                </div>
            </div>
        </div>
    )

}

export default Sorting;