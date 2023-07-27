import "./App.css";
import Navbar from "./Home/navbar";
import Home from "./Home/home";
import Events from "./Events/events";
import Footer from "./Home/footer";
import Team from "./Team/team";
import Acheivements from "./achivements/achivements";
import Qp from "./Qp/qp";
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
          <Route path="/achievemnts" element={<Acheivements />} />
          <Route path="/qp" element={<Qp />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
