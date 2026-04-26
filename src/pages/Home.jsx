import React from 'react';
import Header from '../components/header/header';
import About from '../components/about/about';
import Catalog from '../components/catalog/catalog';
import Footer from '../components/footer/footer';

const Home = ({ cards }) => {
    return (
        <React.Fragment>
            <Header />
            <main className="main">
                <About />
                <Catalog cards={cards} />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Home;