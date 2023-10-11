import "./App.css";
import Navbar from "./Home/navbar";
import Home from "./Home/home";
import Sponsors from "./Sponsors/sponsors";
import Footer from "./Home/footer";
import Team from "./Team/team";
import About from "./About/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
