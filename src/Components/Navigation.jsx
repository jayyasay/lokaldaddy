import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assets/logo.jpg";

function BasicExample() {
  return (
    <Navbar collapseOnSelect expand="sm" className="bg-dark bg-gradient nav-override p-0" >
      <Container>
        <Navbar.Brand href="#home" className="text-light p-0">
          <img src={Logo} alt="Logo" style={{height: '66px', padding: 0}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-light text-uppercase">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Gallery
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Contact us
            </Nav.Link>
            {/* <NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
              className="custom-dropdown-light"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
