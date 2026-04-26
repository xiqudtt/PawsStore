import React from 'react';
import Header from '../components/header/header';
import CartProgress from '../components/cartProgress/cartProgress';
import CartContent from '../components/cartContent/cartContent';
import EmptyCart from '../components/emptyCart/emptyCart';
import Footer from '../components/footer/footer';

const Cart = ({ cards }) => {
    const hasItems = cards && cards.length > 0;

    return (
        <React.Fragment>
            <Header />
            <main className="main">
                {hasItems ? (
                    <>
                        <CartProgress />
                        <CartContent cards={cards} />
                    </>
                ) : (
                    <EmptyCart />
                )}
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Cart;