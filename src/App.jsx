import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import './App.css';
import Popup from './components/Popup/Popup.jsx';
import EmptyCart from "./components/emptyCart/emptyCart.jsx";
import PopupProvider from './contexts/PopupContext.jsx';

// позже перепишем в виде get-запроса
import img1 from "./img/image1.jpg";
import img2 from "./img/image2.png";
import img3 from "./img/image3.jpg";
import img4 from "./img/image4.jpg";
import CartProvider from './contexts/CartContext.jsx';

// позже перепишем в виде get-запроса
const cards = [
  {
    id: 1,
    price: 54.99,
    quantity: 0,
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
    quantity: 0,
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
    quantity: 0,
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
    quantity: 0,
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

const App = () => {
  const [popup, setPopup] = useState({ isVisible: false, message: "" });

  return (
    <PopupProvider>
      <CartProvider>
        <div className="wrapper">
          <BrowserRouter basename="/PawsStore">
            <Routes>
              <Route path="/" element={<Home cards={cards} />} />
              <Route path="/product/:id" element={<Product cards={cards} />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CartProvider>
    </PopupProvider>
  )
}

export default App;