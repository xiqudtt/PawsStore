import { createContext, useContext, useState } from "react";
import Popup from "../components/Popup/Popup";

const PopupContext = createContext();
export const usePopup = () => useContext(PopupContext);

const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState({ isVisible: false, message: "" });

    const showAddToCartPopup = (productTitle) => {
        setPopup({
            isVisible: true,
            message: `Added 1 ${productTitle} to cart`
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