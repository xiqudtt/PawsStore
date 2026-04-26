import { useMemo, useState } from 'react';
import Filter from '../filter/filter.jsx';
import Sorting from '../sorting/sorting.jsx';
import Products from '../products/products.jsx';
import './catalog.css';

const Catalog = ({ cards }) => {

    const [filters, setFilters] = useState({
        rating: [0],
        priceRange: { min: 0, max: 100 }
    });

    const [toggleFilter, setToggleFilter] = useState(false);

    const [sortType, setSortType] = useState("name(a-z)");

    const filteredAndSortedProds = useMemo(() => {
        let result = [...cards];

        result = result.filter(item =>
            item.rating >= filters.rating[filters.rating.length - 1] &&
            item.price >= filters.priceRange.min && item.price <= filters.priceRange.max
        );

        if (sortType === "name(a-z)") {
            result.sort((a, b) => a.title.localeCompare(b.title));
        }

        else if (sortType === "name(z-a)") {
            result.sort((a, b) => b.title.localeCompare(a.title));
        }

        else if (sortType === "priceLowToHigh") {
            result.sort((a, b) => a.price - b.price);
        }

        else if (sortType === "priceHighToLow") {
            result.sort((a, b) => b.price - a.price);
        }

        return result;

    }, [filters, sortType]);

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__inner">
                    <Filter
                        filters={filters}
                        setFilters={setFilters}
                        toggleFilter={toggleFilter}
                        setToggleFilter={setToggleFilter}
                    />
                    <Sorting
                        count={filteredAndSortedProds.length}
                        sortType={sortType}
                        setSortType={setSortType}
                        toggleFilter={toggleFilter}
                        setToggleFilter={setToggleFilter}
                    />
                    <Products prods={filteredAndSortedProds} />
                </div>
            </div>
        </section>
    )
}

export default Catalog;