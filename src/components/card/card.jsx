import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import './card.css';

const Card = ({ onClick, price, title, img, rating }) => {
    const normalizedRating = Math.min(5, Math.max(0, rating));
    const roundedRating = Math.round(normalizedRating * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const HalfStar = ({ iconClass = "catalog__info-icon" }) => (
    <span className="half-star-clip" style={{ 
        position: 'relative', 
        display: 'inline-flex', 
        alignItems: 'center',
        justifyContent: 'center',
        width: '14px', 
        height: '14px' 
    }}>
        <AiFillStar 
            className={iconClass} 
            style={{ 
                clipPath: 'inset(0 50% 0 0)',
                width: '100%',
                height: '100%',
                display: 'block'
            }}
        />
    </span>
);

    const renderStars = (iconClass = "catalog__info-icon") => {
        const stars = [];
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<AiFillStar key={`full-${i}`} className={iconClass} />);
        }
        
        if (hasHalfStar) {
            stars.push(<HalfStar key="half" iconClass={iconClass} />);
        }
        
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<AiOutlineStar key={`empty-${i}`} className={iconClass} />);
        }
        
        return stars;
    };

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
                                {renderStars()}
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
                        {renderStars("catalog__rating-icon")}
                    </div>
                    <p className="catalog__rating-count">({rating})</p>
                </div>
            </div>
        </div>
    )
}

export default Card;