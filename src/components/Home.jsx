import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1>Travel Finder — Find Your Destination</h1>
          <p className="text-muted">
            Discover new places, save your favourites and share your own travel stories.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <img
            src="https://picsum.photos/800/300?random=1"
            alt="Beautiful view of a travel destination"
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="d-grid mb-3 mb-md-0">
          <Button as={Link} to="/destinations" variant="primary" size="lg">
            Browse destinations
          </Button>
        </Col>
        <Col md={6} className="d-grid">
          <Button as={Link} to="/comment" variant="outline-primary" size="lg">
            Share your experience
          </Button>
        </Col>
      </Row>

      <Row className="border-top pt-3">
        <Col md={6}>
          <h2 className="h5">Contact</h2>
          <p className="mb-1">Phone: xxx-xxx-xxxx</p>
          <p className="mb-0">Email: example@gmail.com</p>
        </Col>
      </Row>
    </Container>
  );
}
