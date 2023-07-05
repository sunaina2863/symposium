import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Home/navbar";
import Home from "./Home/home";
import Events from "./Events/events";
import Footer from "./Home/footer";
import Team from "./Team/team";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
