import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import MyComment from "./components/MyComment";
import Saved from "./components/Saved";
import NavBar from "./components/NavBar";
import { SavedProvider } from "./components/SavedContext";


export default function App() {
  return (
    <SavedProvider>
      <Router>
        <NavBar />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/comment" element={<MyComment />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </div>
      </Router>
    </SavedProvider>
  );
}


