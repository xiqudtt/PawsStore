import "./nav.css";

const Nav = ({ className="" }) => {
    return (
        <nav className={"header__menu " + className}>
            <ul className="header__menu-list">
                <li className="header__menu-item"><a className="header__menu-link" href="#">Shop</a></li>
                <li className="header__menu-item"><a className="header__menu-link" href="#">Categories</a></li>
                <li className="header__menu-item"><a className="header__menu-link" href="#">Deals</a></li>
                <li className="header__menu-item"><a className="header__menu-link" href="#">About</a></li>
            </ul>
        </nav>
    )
}

export default Nav;