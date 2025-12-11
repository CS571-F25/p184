import { Container } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Container>
      <h1 className="mb-3">About Us</h1>
      <p>
        Travel Finder is a small demo project where you can explore destinations,
        save places you like and share your own travel experiences with others.
      </p>
      <p>
        This site was built with React, React Router and React Bootstrap, with a focus on
        accessibility and simple, clean design.
      </p>
    </Container>
  );
}
