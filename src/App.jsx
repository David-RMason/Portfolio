import { Routes, Route } from "react-router-dom";

import ScrollController from "./components/scrollController";
import NewNav from "./components/navigation";
import Home from "./routes/home";
import Footer from "./components/footer";
import CV from "./routes/cv";

import "./App.css";

function App() {
  return (
    <>
      <ScrollController />
      <NewNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
