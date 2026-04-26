import "./counter.css";
import { useState, useEffect } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

const Counter = ({ count: propCount, onQuantityChange, min = 1, max = 99 }) => {
    const [localCount, setLocalCount] = useState(propCount || 1);
    
    const isControlled = propCount !== undefined;
    const displayCount = isControlled ? propCount : localCount;

    useEffect(() => {
        if (isControlled && propCount !== undefined) {
            setLocalCount(propCount);
        }
    }, [propCount, isControlled]);

    const countDecrement = (e) => {
        e.stopPropagation();
        const newCount = displayCount - 1;
        if (newCount < min) return;
        
        if (isControlled && onQuantityChange) {
            onQuantityChange(newCount);
        } else {
            setLocalCount(prev => (prev > min ? prev - 1 : min));
        }
    };

    const countIncrement = (e) => {
        e.stopPropagation();
        const newCount = displayCount + 1;
        if (newCount > max) return;
        
        if (isControlled && onQuantityChange) {
            onQuantityChange(newCount);
        } else {
            setLocalCount(prev => (prev < max ? prev + 1 : max));
        }
    };

    return (
        <div className="counter">
            <button className="counter__decrement" onClick={countDecrement}>
                <LuMinus />
            </button>
            <p className="counter__count">{displayCount}</p>
            <button className="counter__increment" onClick={countIncrement}>
                <LuPlus />
            </button>
        </div>
    );
};

export default Counter;