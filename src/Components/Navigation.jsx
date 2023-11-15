import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  const handleSelect = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setExpanded(false);
  };
  return (
    <Navbar
      expand="sm"
      expanded={expanded}
      className="bg-dark bg-gradient nav-override p-0"
      onToggle={(newExpanded) => setExpanded(newExpanded)}
    >
      <Container>
        <Navbar.Brand href="#home" className="text-light p-0">
          <img src={Logo} alt="Logo" style={{ height: "66px", padding: 0 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-light text-uppercase">
            <Nav.Link
              as={Link}
              to="/"
              className="text-light"
              onClick={handleSelect}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/gallery"
              className="text-light"
              onClick={handleSelect}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact-us"
              className="text-light"
              onClick={handleSelect}
            >
              Request an appointment
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
