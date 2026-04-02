import { LuPawPrint } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import "./header.css"

const Header = () => {
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
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item"><a className="header__menu-link" href="#">Shop</a></li>
              <li className="header__menu-item"><a className="header__menu-link" href="#">Categories</a></li>
              <li className="header__menu-item"><a className="header__menu-link" href="#">Deals</a></li>
              <li className="header__menu-item"><a className="header__menu-link" href="#">About</a></li>
            </ul>
          </nav>
          <div className="header__actions">
            <RiSearchLine className="header__actions-icon" />
            <LuShoppingCart className="header__actions-icon" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;