import "./counter.css";
import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

const Counter = () => {
    let [count, setCount] = useState(1);

    const countDecrement = (e) => {
        setCount(count < 2 ? 1 : --count);
    }

    const countIncrement = (e) => {
        setCount(++count);
    }

    return (
        <div className="counter">
            <button className="counter__decrement" onClick={countDecrement}>
                <LuMinus/>
            </button>
            <p className="counter__count">{count}</p>
            <button className="counter__increment" onClick={countIncrement}>
                <LuPlus/>
            </button>
        </div>
    )
}

export default Counter;