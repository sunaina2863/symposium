
import React from "react";
import Logo from "./MSES_Logo.svg";
import "./navbar.css";
import Material from "./Material Science & Engineering Society.svg"

const Navbar = () => {
  return (
    <>
       <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">
        <div className="nav-head">
          <img className="mse-logo" src={Logo} alt="Logo" width="72" height="65" />
          <img className="mat-text" src={Material} />
        </div>
      </label>
      <ul>
        <li><a class="active" href="#">Home</a></li>
        <li><a href="/sponsors">Sponsors</a></li>
        <li><a href="/team">Team</a></li>
        
      </ul>
    </nav>

  </>
  );
};

export default Navbar;
