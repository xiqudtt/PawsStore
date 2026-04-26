import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [prods, setProds] = useState([]);

    return (
        <CartContext.Provider value={{ prods, setProds }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;