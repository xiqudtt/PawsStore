import "./counter.css";
import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

// Добавляем пропсы: 
// count - текущее значение
// increment/decrement - функции для изменения
const Counter = ({ count: propCount, increment, decrement }) => {
    // Внутреннее состояние для обычных карточек на сайте
    const [localCount, setLocalCount] = useState(1);

    // Проверяем, управляется ли компонент извне (есть ли пропсы)
    const isControlled = propCount !== undefined;

    // Определяем, какое значение отображать
    const displayCount = isControlled ? propCount : localCount;

    const countDecrement = (e) => {
        if (isControlled) {
            // Если пропсы есть, вызываем функцию родителя
            decrement();
        } else {
            // Если пропсов нет, работаем со своим стейтом (старая логика)
            setLocalCount(prev => (prev > 1 ? prev - 1 : 1));
        }
    };

    const countIncrement = (e) => {
        if (isControlled) {
            // Если пропсы есть, вызываем функцию родителя
            increment();
        } else {
            // Если пропсов нет, работаем со своим стейтом
            setLocalCount(prev => prev + 1);
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