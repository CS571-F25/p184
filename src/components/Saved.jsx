import { Container, Row, Col } from "react-bootstrap";
import { useSaved } from "./SavedContext";
import DestinationCard from "./DestinationCard";

export default function Saved() {
  const { savedList } = useSaved();

  return (
    <Container>
      <h1 className="mb-4">Saved Destinations</h1>

      {savedList.length === 0 && <p>No saved destinations yet.</p>}

      <Row xs={1} sm={2} md={3} className="g-4">
        {savedList.map((item, index) => (
          <Col key={index}>
            <DestinationCard
              name={item.name}
              image={item.image}
              description={item.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

