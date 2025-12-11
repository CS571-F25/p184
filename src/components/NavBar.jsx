import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="mb-3" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Travel Finder
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/destinations">
              Destinations
            </Nav.Link>
            <Nav.Link as={Link} to="/comment">
              My Comment
            </Nav.Link>
            <Nav.Link as={Link} to="/saved">
              Saved
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
