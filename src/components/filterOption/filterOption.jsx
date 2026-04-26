import Checkbox from '../checkbox/checkbox';
import Range from '../range/range';
import './filterOption.css';

const FilterOption = ({ title, filters, setFilters, type }) => {
    let content = "";

    switch (type) {
        case "checkbox":
            content = [5, 4, 3].map(val => (
                <Checkbox
                    key={val}
                    value={val}
                    option={`${val}+ Stars`}
                    filters={filters}
                    setFilters={setFilters}
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
            <div className="catalog__filter-type">{content}</div>
        </div>
    )
}

export default FilterOption;