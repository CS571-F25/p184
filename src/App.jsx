import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import MyComment from "./components/MyComment";
import Saved from "./components/Saved";
import { SavedProvider } from "./components/SavedContext";

export default function App() {
  return (
    <SavedProvider>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/comment" element={<MyComment />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </SavedProvider>
  );
}
