import './App.css';
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Footer from './components/footer/footer.jsx';
import Catalog from './components/catalog/catalog.jsx';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <About />
        <Catalog />
      </main>

      <Footer />
    </div>
  )
}

export default App;