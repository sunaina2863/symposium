import React from "react";
import Logo from "./logoblack.png";


const Navbar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand mx-4" href="#">
                <img src={Logo} alt="Logo" width="72" height="72"/>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link mx-5 active" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-5" href="/Events">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-5" href="/Achievemnts">Achievments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-5" href="/Team">Team</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
 };

 export default Navbar;