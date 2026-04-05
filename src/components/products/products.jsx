import React from 'react'
import './products.css';
import Card from '../card/card.jsx';

const Products = ({ prods }) => {
    return (
        <div className="catalog__cards">
            {prods.map(prod => <Card key={prod.id} price={prod.price} title={prod.title} img={prod.img} rating={prod.rating} />)}
        </div>
    )
}

export default Products;