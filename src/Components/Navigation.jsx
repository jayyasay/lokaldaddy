import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiMail, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpg";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "Consultation", to: "/contact-us" },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`site-navbar ${location.pathname === "/" ? "home-navbar" : ""} ${
          menuOpen ? "menu-open" : ""
        }`}
      >
        <Container className="nav-shell">
          <Link to="/" className="brand-mark" onClick={closeMenu}>
            <img src={logo} alt="LokalDaddy logo" />
            <div>
              <span>LokalDaddy</span>
              <strong>Tattoo Lounge</strong>
            </div>
          </Link>

          <div className="nav-actions">

            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-controls="site-menu-overlay"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </Container>
      </header>

      <div
        id="site-menu-overlay"
        className={`menu-overlay ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="menu-overlay-backdrop" />
        <Container className="menu-overlay-shell">
          <div className="menu-grid">
            <div className="menu-primary">
              <span className="eyebrow">Navigation</span>
              <nav className="menu-links" aria-label="Primary">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className={location.pathname === item.to ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <aside className="menu-secondary">

              <div className="menu-card">
                <h3>
                  <FiMail /> Contact
                </h3>
                <a href="mailto:lokaldaddyph@gmail.com">lokaldaddyph@gmail.com</a>
                <p>09991234567</p>
                <p>B2 L29 Yen Street, Villa Carolina 1, Tunasan, Muntinlupa City</p>
              </div>

              <div className="menu-socials">
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
            </aside>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Navigation;
