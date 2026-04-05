import './filterOption.css';
import Checkbox from '../checkbox/checkbox.jsx';
import Range from '../range/range.jsx';

const FilterOption = ({ title, filters, setFilters, type }) => {
    let content = "";

    switch (type) {
        case "checkbox":
            content = [5, 4, 3].map(val => (
                <Checkbox
                    key={val}
                    value={val}
                    option={`${val}+ Stars`}
                    activeRating={filters.rating}
                    setRating={(newVal) => setFilters(prev => ({ ...prev, rating: newVal }))}
                />
            ));
            break;
        case "range":
            content = <Range
                title1="Min"
                title2="Max"
                filters={filters}
                setFilters={setFilters}
            />
            break;
    }

    return (
        <div className="catalog__filter-option">
            <h3 className="catalog__filter-title">{title}</h3>
            <div className="catalog__filter-type">
                {content}
            </div>
        </div>
    )
}

export default FilterOption;