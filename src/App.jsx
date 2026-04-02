import './App.css';
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <About />
      </main>

      <Footer />
    </div>
  )
}

export default App;