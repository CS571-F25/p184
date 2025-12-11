import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useSaved } from "./SavedContext";

export default function DestinationCard({ name, image, description }) {
  const [showMore, setShowMore] = useState(false);
  const { savedList, addToSaved, removeFromSaved } = useSaved();

  const isSaved = savedList.some((item) => item.name === name);

  const handleToggleMore = () => {
    setShowMore((prev) => !prev);
  };

  const handleToggleSave = () => {
    if (isSaved) {
      removeFromSaved(name);
    } else {
      addToSaved({ name, image, description });
    }
  };

  const shortText =
    description.length > 40 ? description.slice(0, 40) + "..." : description;

  const buttonText = isSaved ? "✓ Saved" : "❤️ Save";
  const buttonVariant = isSaved ? "success" : "danger";

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{showMore ? description : shortText}</Card.Text>

        <div className="d-flex justify-content-between">
          <Button
            variant="outline-primary"
            size="sm"
            onClick={handleToggleMore}
          >
            {showMore ? "Hide" : "More"}
          </Button>

          <Button variant={buttonVariant} size="sm" onClick={handleToggleSave}>
            {buttonText}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

