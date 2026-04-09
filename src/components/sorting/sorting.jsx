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