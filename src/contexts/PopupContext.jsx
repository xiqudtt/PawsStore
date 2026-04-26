import { createContext, useContext, useState } from "react";
import Popup from "../components/Popup/Popup";

const PopupContext = createContext();
export const usePopup = () => useContext(PopupContext);

const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState({ isVisible: false, message: "" });

    const showAddToCartPopup = (productTitle, quantity = 1) => {
        const messageText = quantity > 1 
            ? `Added ${quantity} ${productTitle}s to cart`
            : `Added 1 ${productTitle} to cart`;
        
        setPopup({
            isVisible: true,
            message: messageText
        });
    };

    const closePopup = () => {
        setPopup(prev => ({ ...prev, isVisible: false }));
    };

    return (
        <PopupContext.Provider value={{ showAddToCartPopup }}>
            {children}
            <Popup isVisible={popup.isVisible} message={popup.message} onClose={closePopup} />
        </PopupContext.Provider>
    )
}

export default PopupProvider;