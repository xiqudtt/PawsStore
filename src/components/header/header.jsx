import { useState } from "react";
import { LuPawPrint } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import Nav from '../nav/nav.jsx';
import Burger from "../burger/burger.jsx";
import BurgerMenu from "../burgerMenu/burgerMenu.jsx";
import "./header.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const [toggleBurger, setToggleBurger] = useState(false);
  const { getCartCount } = useCart();
  
  const cartCount = getCartCount();

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <div className="header__logo-border">
              <Link to="/"><LuPawPrint className="header__logo-icon"/></Link>
            </div>
            <h1 className="header__logo-text" onClick={() => navigate('/')}>PawsStore</h1>
          </div>
          <Nav />
          <div className="header__actions">
            <div className="header__actions-border">
              <RiSearchLine className="header__actions-icon" />
            </div>
            <div className="header__actions-border header__cart-wrapper">
              <LuShoppingCart className="header__actions-icon" onClick={() => navigate('/Cart')}/>
              {cartCount > 0 && (
    						<Link to="/Cart" className="header__cart-badge">{cartCount}</Link>
							)}
            </div>
            <div className="header__actions-border header__actions-border--burger" onClick={() => setToggleBurger(!toggleBurger)}>
              <Burger toggleBurger={toggleBurger} setToggleBurger={setToggleBurger} />
            </div>
          </div>
        </div>
        <BurgerMenu toggleBurger={toggleBurger} />
      </div>
    </header>
  );
}

export default Header;