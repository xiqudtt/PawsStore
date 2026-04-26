import './checkbox.css'

const Checkbox = ({ option, value, filters, setFilters }) => {

    const rangeFilters = (e) => {
        let result;

        if (e.target.checked) {
            result = [...filters.rating, value]
        }

        else {
            result = filters.rating.filter(val => val !== value);
        }

        setFilters(prev => ({ ...prev, rating: result }))
    }

    return (
        <div className="catalog__filter-checkbox">
            <input
                className="catalog__filter-input"
                type="checkbox"
                onChange={rangeFilters}
            />
            <p className="catalog__filter-text">{option}</p>
        </div>
    )
}

export default Checkbox;