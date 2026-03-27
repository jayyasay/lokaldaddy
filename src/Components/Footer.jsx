import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const location = useLocation();

  const handleFooterNavigation = (event, targetPath) => {
    if (location.pathname === targetPath) {
      event.preventDefault();
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div className="footer-brand">
          <div className="brand-mark footer-mark">
            <img src={logo} alt="LokalDaddy logo" />
            <div>
              <span>LokalDaddy</span>
              <strong>Tattoo Lounge</strong>
            </div>
          </div>
          <p>
            A cleaner and more modern tattoo experience focused on quality, process, and long-term results.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/" onClick={(event) => handleFooterNavigation(event, "/")}>
            Home
          </Link>
          <Link
            to="/gallery"
            onClick={(event) => handleFooterNavigation(event, "/gallery")}
          >
            Gallery
          </Link>
          <Link
            to="/contact-us"
            onClick={(event) => handleFooterNavigation(event, "/contact-us")}
          >
            Consultation
          </Link>
        </div>

        <div className="footer-details">
          <h3>Studio</h3>
          <p>
            <FiMapPin /> B2 L29 Yen Street, Villa Carolina 1, Tunasan,
            Muntinlupa City
          </p>
          <p>
            <FiPhone /> 0999 123 4567
          </p>
          <p>
            <FiClock /> Open for consultations and appointments
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow</h3>
          <div>
            <a href="https://www.facebook.com/Lokaldaddy" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LokalDaddy PH</p>
      </div>
    </footer>
  );
};

export default Footer;
