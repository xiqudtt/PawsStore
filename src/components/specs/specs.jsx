import "./specs.css";
import { LuInfo } from "react-icons/lu";

const Specs = ({ specs }) => {
    return (
        <div className="specs">
            {specs.map((spec, idx) => {
                return (
                    <div key={idx} className="specs__item">
                        <div className="specs__item-border">
                            <LuInfo className="specs__item-icon" />
                        </div>
                        <div className="specs__item-info">
                            <h4 className="specs__item-title">{spec.title}</h4>
                            <p className="specs__item-text">{spec.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Specs;