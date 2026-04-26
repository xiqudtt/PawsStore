import { useRef } from 'react';
import Highlights from "../highlights/highlights";
import Counter from "../counter/counter";
import Specs from "../specs/specs";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { LuShoppingCart, LuBox, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './prod.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

const Prod = ({ prod }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const filledCount = Math.floor(prod.rating);
    const emptyCount = 5 - filledCount;

    const filledStars = [...Array(filledCount)].map((_, i) => <AiFillStar key={i} className="prod__rating-icon--fill" />);
    const emptyStars = [...Array(emptyCount)].map((_, i) => <AiOutlineStar key={i} className="prod__rating-icon--outline" />);

    return (
        <section className="prod">
            <div className="container">
                <div className="prod__inner">
                    <div className="prod__left">
                        <Swiper
                            className="prod__slider"
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current
                            }}
                            pagination={{ clickable: true }}
                            loop={true}
                            onBeforeInit={swiper => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                        >
                            {prod.img.map((img, idx) =>
                                <SwiperSlide key={idx} className="prod__slider-item">
                                    <img className="prod__slider-img" src={img} alt={`Slide ${idx}`} />
                                </SwiperSlide>
                            )}
                            <LuChevronLeft ref={prevRef} className="prev-btn prod__slider-arrow" />
                            <LuChevronRight ref={nextRef} className="next-btn prod__slider-arrow" />
                        </Swiper>
                    </div>
                    <div className="prod__right">
                        <p className="prod__category">Travel & Carriers</p>
                        <h2 className="prod__title">{prod.title}</h2>
                        <div className="prod__rating">
                            <div className="prod__rating-icons">{filledStars}{emptyStars}</div>
                            <span className="prod__rating-count">{filledCount} out of {5} stars</span>
                        </div>
                        <p className="prod__price">${prod.price}</p>
                        <div className="prod__highlights">
                            <h3 className="prod__highlights-title">Key Highlights</h3>
                            <Highlights highlights={prod.highlights} />
                        </div>
                        <div className="prod__description">
                            <h3 className="prod__description-title">Description</h3>
                            <p className="prod__description-text">Soft-sided pet carrier approved for airline cabin use. Features mesh panels for ventilation, padded shoulder strap, and collapsible design for easy storage. Interior fleece pad provides comfort. Meets TSA requirements for in-cabin pet travel.</p>
                        </div>
                        <div className="prod__amount">
                            <p className="prod__amount-text">Quantity:</p>
                            <Counter />
                        </div>
                        <button className="prod__btn">
                            <LuShoppingCart className="prod__btn-cart" />
                            <span className="prod__btn-text">Add to Cart</span>
                        </button>
                        <div className="prod__specs">
                            <div className="prod__specs-title">
                                <div className="prod__specs-border">
                                    <LuBox className="prod__specs-icon" />
                                </div>
                                <h3 className="prod__specs-text">Technical Specifications</h3>
                            </div>
                            <Specs specs={prod.specs} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prod;