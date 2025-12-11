
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function CommentForm({ onAddComment }) {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [rating, setRating] = useState("5");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !destination.trim() || !content.trim()) {

      return;
    }

    onAddComment({
      name: name.trim(),
      destination: destination.trim(),
      rating: Number(rating),
      content: content.trim(),
      createdAt: new Date().toISOString()
    });

    setName("");
    setDestination("");
    setRating("5");
    setContent("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="commentName">
        <Form.Label>Your name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="commentDestination">
        <Form.Label>Destination</Form.Label>
        <Form.Control
          type="text"
          placeholder="Where did you go?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="commentRating">
        <Form.Label>Rating</Form.Label>
        <Form.Select
          aria-label="Rating from 1 to 5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="5">5 - Amazing</option>
          <option value="4">4 - Great</option>
          <option value="3">3 - Okay</option>
          <option value="2">2 - Not great</option>
          <option value="1">1 - Terrible</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="commentContent">
        <Form.Label>Your experience</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Share your travel story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Submit comment
      </Button>
    </Form>
  );
}
