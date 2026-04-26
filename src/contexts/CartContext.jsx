import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [prods, setProds] = useState([]);
		
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                if (Array.isArray(parsedCart)) {
                    setProds(parsedCart);
                }
            } catch (error) {
                console.error('Failed to parse cart from localStorage:', error);
            }
        }
    }, []);

    useEffect(() => {
        if (prods.length > 0) {
            localStorage.setItem('cart', JSON.stringify(prods));
        } else {
            localStorage.removeItem('cart');
        }
    }, [prods]);

    const addToCart = (product, quantity = 1) => {
        setProds(prevProds => {
            const existingProduct = prevProds.find(p => p.id === product.id);
            
            if (existingProduct) {
                return prevProds.map(p =>
                    p.id === product.id
                        ? { ...p, quantity: (p.quantity || 1) + quantity }
                        : p
                );
            }
            
            return [...prevProds, { ...product, quantity: quantity }];
        });
    };

    const removeFromCart = (productId) => {
        setProds(prevProds => prevProds.filter(p => p.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setProds(prevProds =>
            prevProds.map(p =>
                p.id === productId
                    ? { ...p, quantity: newQuantity }
                    : p
            )
        );
    };

    const clearCart = () => {
        setProds([]);
        localStorage.removeItem('cart');
    };

    const getCartTotal = () => {
        return prods.reduce((total, prod) => total + (prod.price * (prod.quantity || 1)), 0);
    };

    const getCartCount = () => {
        return prods.reduce((count, prod) => count + (prod.quantity || 1), 0);
    };

    return (
        <CartContext.Provider value={{ 
            prods, 
            setProds,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal,
            getCartCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;