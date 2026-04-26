import React from 'react'
import Header from '../components/header/header';
import CartProgress from '../components/cartProgress/cartProgress';
import CartContent from '../components/cartContent/cartContent';
import Footer from '../components/footer/footer';

const Cart = ({ cards }) => {
    return (
        <React.Fragment>
            <Header />
            <main className="main">
                <CartProgress />
                <CartContent cards={cards}/>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Cart;