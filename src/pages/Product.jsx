import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import Prod from '../components/prod/prod.jsx'
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs.jsx';

const Product = ({ cards }) => {
    const { id } = useParams();
    let product = cards.find(item => item.id === Number(id));

    return (
        <React.Fragment>
            <Header />
            <main className="main">
                <Breadcrumbs title={product.title}/>
                <Prod prod={product}></Prod>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Product;