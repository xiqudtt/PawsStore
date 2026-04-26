import React from 'react';
import Header from '../components/header/header';
import CartProgress from '../components/cartProgress/cartProgress';
import CartContent from '../components/cartContent/cartContent';
import EmptyCart from '../components/emptyCart/emptyCart';
import Footer from '../components/footer/footer';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
    let { prods } = useCart();

    const hasItems = prods && prods.length > 0;

    return (
        <React.Fragment>
            <Header />
            <main className="main">
                {hasItems ? (
                    <>
                        <CartProgress />
                        <CartContent prods={prods} />
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