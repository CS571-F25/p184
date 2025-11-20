import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link>
      <Link to="/destinations">Destinations</Link>
      <Link to="/comment">My Comment</Link>
      <Link to="/saved">Saved</Link>
    </nav>
  );
}
