// @ts-nocheck
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const STORAGE_KEY = "travel-comments";

export default function MyComment() {
  const [comments, setComments] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return [];
      }
    }
    return [
      {
        id: 1,
        name: "Anna",
        destination: "Kyoto Temples",
        rating: 5,
        content:
          "The temples were so peaceful and the cherry blossoms were beautiful.",
        createdAt: "2024-03-01T10:00:00.000Z"
      },
      {
        id: 2,
        name: "Lucas",
        destination: "New York City",
        rating: 4,
        content:
          "Amazing city, but it can be a bit crowded. Times Square at night is crazy.",
        createdAt: "2024-03-02T15:30:00.000Z"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (newComment) => {
    setComments((prev) => [{ id: Date.now(), ...newComment }, ...prev]);
  };

  return (
    <Container>
      <h1 className="mb-3">Share Your Travel Experience</h1>
      <p className="mb-4">
        Tell us about your favourite trip, what you loved and what you would
        recommend to other travellers.
      </p>

      <Row className="g-4">
        <Col lg={6}>
          <h2 className="h4 mb-3">Leave a comment</h2>
          <CommentForm onAddComment={handleAddComment} />
        </Col>

        <Col lg={6}>
          <h2 className="h4 mb-3">Recent comments</h2>
          <CommentList comments={comments} />
        </Col>
      </Row>
    </Container>
  );
}
