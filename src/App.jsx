import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./routes/home";
import About from "./routes/about";
import Projects from "./routes/projects";
import CV from "./routes/cv";
import Contact from "./routes/contact";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
