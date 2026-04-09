import './catalog.css';
import { useMemo, useState } from 'react';

import Filter from '../filter/filter.jsx';
import Sorting from '../sorting/sorting.jsx';
import Products from '../products/products.jsx';

// позже перепишем в виде get-запроса
import img1 from "./img/image1.jpg";
import img2 from "./img/image2.png";
import img3 from "./img/image3.jpg";
import img4 from "./img/image4.jpg";

// позже перепишем в виде get-запроса
const cards = [
    { id: 1, price: 54.99, title: "Birline-Approved Pet Travel Carrier", img: img1, rating: 2 },
    { id: 2, price: 21.99, title: "Airline-Approved Pet Travel Carrier", img: img2, rating: 3 },
    { id: 3, price: 78.99, title: "Dirline-Approved Pet Travel Carrier", img: img3, rating: 1 },
    { id: 4, price: 34.99, title: "Dirline-Approved Pet Travel Carrier", img: img4, rating: 4 }
];

const Catalog = () => {

    const [filters, setFilters] = useState({
        rating: 0,
        priceRange: { min: 0, max: 100 }
    });

    const [toggleFilter, setToggleFilter] = useState(false);

    const [sortType, setSortType] = useState("name");

    const filteredAndSortedProds = useMemo(() => {
        let result = [...cards];

        result = result.filter(item =>
            item.rating >= filters.rating &&
            item.price >= filters.priceRange.min && item.price <= filters.priceRange.max
        );

        if (sortType === "name") {
            result.sort((a, b) => a.title.localeCompare(b.title));
        }
        else if (sortType === "rating") {
            result.sort((a, b) => b.rating - a.rating);
        }
        else if (sortType === "price") {
            result.sort((a, b) => a.price - b.price);
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