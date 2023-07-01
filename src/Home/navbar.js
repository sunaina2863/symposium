import React from "react";
import Logo from "./logoblack.png";


const Navbar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                <img src={Logo} alt="Logo" width="90" height="90"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/Events">Events</a>
                    <a class="nav-item nav-link" href="/Achievemnts">Achievments</a>
                    <a class="nav-item nav-link" href="/Team">Team</a>
                </div>
            </div>
        </nav>
        </>
    )
 };

 export default Navbar;