import { useState } from "react";
import { LuPawPrint } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import Nav from '../nav/nav.jsx';
import Burger from "../burger/burger.jsx";
import BurgerMenu from "../burgerMenu/burgerMenu.jsx";
import "./header.css"

const Header = () => {
  const [toggleBurger, setToggleBurger] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <div className="header__logo-border">
              <LuPawPrint className="header__logo-icon" />
            </div>
            <h1 className="header__logo-text">PawsStore</h1>
          </div >
          <Nav />
          <div className="header__actions">
            <div className="header__actions-border">
              <RiSearchLine className="header__actions-icon" />
            </div>
            <div className="header__actions-border">
              <LuShoppingCart className="header__actions-icon" />
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