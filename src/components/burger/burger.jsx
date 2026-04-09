import { useState } from "react";
import "./burger.css";

const Burger = ({ toggleBurger, setToggleBurger }) => {
    const toggleButton = () => {
        toggleBurger ? setToggleBurger(false) : setToggleBurger(true);
    }

    return (
        <button className={"header__burger " + (toggleBurger ? "header__burger--on" : "")} onClick={toggleButton}>
            <span className="header__burger-row"></span>
            <span className="header__burger-row"></span>
            <span className="header__burger-row"></span>
        </button>
    );
}

export default Burger;