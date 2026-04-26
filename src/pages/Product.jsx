import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/header.jsx';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Prod from "../components/prod/prod";
import Footer from '../components/footer/footer.jsx';

const Product = ({ cards }) => {
    const { id } = useParams();
    let prod = cards.find(item => item.id === Number(id));

    return (
        <React.Fragment>
            <Header />
            <main className="main">
                <Breadcrumbs title={prod.title} />
                <Prod prod={prod} />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Product;