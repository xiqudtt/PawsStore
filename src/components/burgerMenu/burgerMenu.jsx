import "./burgerMenu.css";
import Nav from "../nav/nav.jsx";

const BurgerMenu = ({ toggleBurger }) => {
    return (
        <div className={"burger__menu " + (toggleBurger ? "burger__menu--on" : "")}>
            <Nav className="burger__menu-nav" />
        </div>
    )
}

export default BurgerMenu;