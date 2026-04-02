import './footer.css';
import { CiMail } from "react-icons/ci";
import { LuPawPrint } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__section presentation-section">
            <div className="presentation-section__logo">
              <div className="presentation-section__logo-border">
                <LuPawPrint className="presentation-section__logo-icon" />
              </div>
              <h2 className="presentation-section__logo-text">PawsStore</h2>
            </div>
            <p className="presentation-section__text">Your trusted source for premium pet supplies and accessories.</p>
          </div>
          <div className="footer__section">
            <h3 className="footer__section-title">Quick Links</h3>
            <ul className="footer__section-list">
              <li className="footer__section-item"><a className="footer__section-link" href="#">Shop All</a></li>
              <li className="footer__section-item"><a className="footer__section-link" href="#">New Arrivals</a></li>
              <li className="footer__section-item"><a className="footer__section-link" href="#">Best Sellers</a></li>
              <li className="footer__section-item"><a className="footer__section-link" href="#">Sale Items</a></li>
            </ul>
          </div>
          <div className="footer__section">
            <h3 className="footer__section-title">Customer Service</h3>
            <ul className="footer__section-list">
              <li className="footer__section-item"><a className="footer__section-link" href="#">Contact Us</a></li>
              <li className="footer__section-item"><a className="footer__section-link" href="#">Shipping Info</a></li>
              <li className="footer__section-item"><a className="footer__section-link" href="#">Returns Policy</a></li>
              <li className="footer__section-item"><a className="footer__section-link" href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer__section newsletter-section">
            <h3 className="footer__section-title newsletter-section__title">Newsletter</h3>
            <p className="newsletter-section__text newsletter-section__text">Subscribe to get special offers and updates.</p>
            <form className="newsletter-section__form" onSubmit={(e) => e.preventDefault()}>
              <div className='newsletter-section__form-inner'>
                <input className="newsletter-section__input" type="email" placeholder="Your email" />
                <button className="newsletter-section__button" type="submit" aria-label="Subscribe">
                  <CiMail className="newsletter-section__icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__rights">© 2026 PawsStore. All rights reserved.</p>
          <div className="footer__social-icons">
            <FaFacebookF className="footer__social-icon" />
            <FaTwitter className="footer__social-icon" />
            <FaInstagram className="footer__social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;