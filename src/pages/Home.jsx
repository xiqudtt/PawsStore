import React from 'react';
import Header from '../components/header/header.jsx';
import About from '../components/about/about.jsx';
import Catalog from '../components/catalog/catalog.jsx';
import Footer from '../components/footer/footer.jsx';

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