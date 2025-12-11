import { Card } from "react-bootstrap";

export default function CommentList({ comments }) {
  if (comments.length === 0) {
    return <p>No comments yet. Be the first to share your story!</p>;
  }

  return (
    <div className="d-flex flex-column gap-3">
      {comments.map((comment) => (
        <Card key={comment.id}>
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <span>{comment.destination}</span>
              <span aria-label={`Rating: ${comment.rating} out of 5`}>
                ⭐ {comment.rating}/5
              </span>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              by {comment.name}
            </Card.Subtitle>
            <Card.Text>{comment.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
