import React, { useState, createContext, useContext } from 'react'; // Добавили контексты
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import './App.css';
import Popup from './components/Popup/Popup.jsx';

// позже перепишем в виде get-запроса
import img1 from "./img/image1.jpg";
import img2 from "./img/image2.png";
import img3 from "./img/image3.jpg";
import img4 from "./img/image4.jpg";

// позже перепишем в виде get-запроса
const cards = [
  {
    id: 1,
    price: 54.99,
    title: "Birline-Approved Pet Travel Carrier",
    img: [img1, img1, img1],
    rating: 4.5,
    highlights: ["Dimensions: 18 x 11 x 11 inches", "Material: Polyester with Mesh Panels", "Weight Limit: Up to 15 lbs"],
    specs: [
      { title: "Dimensions", description: "18 x 11 x 11 inches" },
      { title: "Material", description: "Polyester with Mesh Panels" },
      { title: "Weight Limit", description: "Up to 15 lbs" },
      { title: "Airline Approved", description: "Yes (TSA Compliant)" },
      { title: "Features", description: "Collapsible, Padded Strap" }
    ]
  },
  {
    id: 2,
    price: 21.99,
    title: "Airline-Approved Pet Travel Carrier",
    img: [img2, img2, img2],
    rating: 3,
    highlights: ["Dimensions: 18 x 11 x 11 inches", "Material: Polyester with Mesh Panels", "Weight Limit: Up to 15 lbs"],
    specs: [
      { title: "Dimensions", description: "18 x 11 x 11 inches" },
      { title: "Material", description: "Polyester with Mesh Panels" },
      { title: "Weight Limit", description: "Up to 15 lbs" },
      { title: "Airline Approved", description: "Yes (TSA Compliant)" },
      { title: "Features", description: "Collapsible, Padded Strap" }
    ]
  },
  {
    id: 3,
    price: 78.99,
    title: "Dirline-Approved Pet Travel Carrier",
    img: [img3, img3, img3],
    rating: 1,
    highlights: ["Dimensions: 18 x 11 x 11 inches", "Material: Polyester with Mesh Panels", "Weight Limit: Up to 15 lbs"],
    specs: [
      { title: "Dimensions", description: "18 x 11 x 11 inches" },
      { title: "Material", description: "Polyester with Mesh Panels" },
      { title: "Weight Limit", description: "Up to 15 lbs" },
      { title: "Airline Approved", description: "Yes (TSA Compliant)" },
      { title: "Features", description: "Collapsible, Padded Strap" }
    ]
  },
  {
    id: 4,
    price: 34.99,
    title: "Dirline-Approved Pet Travel Carrier",
    img: [img4, img4, img4],
    rating: 4,
    highlights: ["Dimensions: 18 x 11 x 11 inches", "Material: Polyester with Mesh Panels", "Weight Limit: Up to 15 lbs"],
    specs: [
      { title: "Dimensions", description: "18 x 11 x 11 inches" },
      { title: "Material", description: "Polyester with Mesh Panels" },
      { title: "Weight Limit", description: "Up to 15 lbs" },
      { title: "Airline Approved", description: "Yes (TSA Compliant)" },
      { title: "Features", description: "Collapsible, Padded Strap" }
    ]
  }
];

const PopupContext = createContext();

const App = () => {
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
      <div className="wrapper">
        <BrowserRouter basename="/PawsStore">
          <Routes>
            <Route path="/" element={<Home cards={cards} />} />
            <Route path="/product/:id" element={<Product cards={cards} />} />
            <Route path="/Cart" element={<Cart cards={cards} />} />
          </Routes>

          {/* Попап лежит внутри BrowserRouter, но вне Routes — он вечный */}
          <Popup isVisible={popup.isVisible} message={popup.message} onClose={closePopup} />
        </BrowserRouter>
      </div>
    </PopupContext.Provider>
  )
}

export const usePopup = () => useContext(PopupContext);

export default App;