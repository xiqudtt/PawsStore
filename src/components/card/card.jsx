import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import './card.css';

const Card = ({ onClick, price, title, img, rating }) => {
    const filledCount = Math.floor(rating);
    const emptyCount = 5 - filledCount;

    return (
        <div className="catalog__cards-item" onClick={onClick}>
            <div className="catalog__cards-top">
                <img className="catalog__cards-img" src={img} alt="" />
                <p className="catalog__cards-price">${price}</p>
                <div className="catalog__info">
                    <div className="catalog__info-inner">
                        <h3 className="catalog__info-title">{title}</h3>
                        <div className="catalog__info-rating">
                            <div className="catalog__info-icons">
                                {[...Array(filledCount)].map((_, i) => (
                                    <AiFillStar key={i} className="catalog__info-icon" />
                                ))}
                                {[...Array(emptyCount)].map((_, i) => (
                                    <AiOutlineStar key={i} className="catalog__info-icon" />
                                ))}
                            </div>
                            <p className="catalog__info-text">({rating})</p>
                        </div>
                        <div className="catalog__info-bottom">
                            <p className="catalog__info-price">${price}</p>
                            <button className="catalog__info-btn">
                                <LuShoppingCart className="catalog__info-img" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="catalog__cards-bottom">
                <h2 className="catalog__cards-title">{title}</h2>
                <div className="catalog__rating">
                    <div className="catalog__rating-icons">
                        {[...Array(filledCount)].map((_, i) => (
                            <AiFillStar key={i} className="catalog__info-icon" />
                        ))}
                        {[...Array(emptyCount)].map((_, i) => (
                            <AiOutlineStar key={i} className="catalog__info-icon" />
                        ))}
                    </div>
                    <p className="catalog__rating-count">({rating})</p>
                </div>
            </div>
        </div>
    )
}

export default Card;