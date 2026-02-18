import { LuPawPrint } from "react-icons/lu";
import { SlMagnifier } from "react-icons/sl";
import { LuShoppingCart } from "react-icons/lu";
import "./header.css"

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <div className="circle">
            <LuPawPrint className="LuPawPrint"/>
          </div>
          <div className="logo">PawsStore</div>
        </div>
        <nav className="nav-menu">
          <a href="#">Shop</a>
          <a href="#">Categories</a>
          <a href="#">Deals</a>
          <a href="#">About</a>
        </nav>
        <div className="actions">
          <SlMagnifier className="search-icon"/>
          <LuShoppingCart className="cart-icon"/>
        </div>
      </div>
    </header>
  );
}