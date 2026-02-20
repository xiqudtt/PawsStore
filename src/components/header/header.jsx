import { LuPawPrint } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
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
          <RiSearchLine className="search-icon"/>
          <LuShoppingCart className="cart-icon"/>
        </div>
      </div>
    </header>
  );
}