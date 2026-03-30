import './footer.css';
import { CiMail } from "react-icons/ci";
import { LuPawPrint } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="logo-section">
            <div className="circle">
              <LuPawPrint className="LuPawPrint"/>
            </div>
            <div className="logo">PawsStore</div>
          </div>
          <p className="logo-text">Your trusted source for premium pet supplies and accessories.</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Shop All</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Sale Items</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Customer Service</h3>
          <ul className="footer-links">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns Policy</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter-section">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="newsletter-text">Subscribe to get special offers and updates.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className='input-div'>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                />
              </div>
              <button type="submit" className="send-button" aria-label="Subscribe">
                <CiMail />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PawsStore. All rights reserved.</p>
        <div className="social-icons">
          <FaFacebookF className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>
    </footer>
  );
};