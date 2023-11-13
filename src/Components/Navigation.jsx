import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      className="bg-dark bg-gradient nav-override p-0"
    >
      <Container>
        <Navbar.Brand href="#home" className="text-light p-0">
          <img src={Logo} alt="Logo" style={{ height: "66px", padding: 0 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-light text-uppercase">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
            <Link to="/gallery" className="nav-link text-light">
              Gallery
            </Link>
            <Link to="/contact-us" className="nav-link text-light">
              Contact us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
