import "./burger.css";

const Burger = ({ toggleBurger, setToggleBurger }) => {
    return (
        <button className={"header__burger" + (toggleBurger ? " header__burger--on" : "")} onClick={() => setToggleBurger(!toggleBurger)}>
            <span className="header__burger-row"></span>
            <span className="header__burger-row"></span>
            <span className="header__burger-row"></span>
        </button>
    );
}

export default Burger;