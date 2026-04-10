import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Footer from './components/footer/footer.jsx';
import Catalog from './components/catalog/catalog.jsx';

import './App.css';

// позже перепишем в виде get-запроса
import img1 from "./img/image1.jpg";
import img2 from "./img/image2.png";
import img3 from "./img/image3.jpg";
import img4 from "./img/image4.jpg";

// позже перепишем в виде get-запроса
const cards = [
    { id: 1, price: 54.99, title: "Birline-Approved Pet Travel Carrier", img: img1, rating: 2 },
    { id: 2, price: 21.99, title: "Airline-Approved Pet Travel Carrier", img: img2, rating: 3 },
    { id: 3, price: 78.99, title: "Dirline-Approved Pet Travel Carrier", img: img3, rating: 1 },
    { id: 4, price: 34.99, title: "Dirline-Approved Pet Travel Carrier", img: img4, rating: 4 }
];

const App = () => {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <About />
        <Catalog cards={cards}/>
      </main>

      <Footer />
    </div>
  )
}

export default App;