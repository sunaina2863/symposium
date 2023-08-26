import React from "react";
import Logo from "./logoblack.png";
import "./navbar.css";
import MSESlogo from "./MSESlogo.png";
import Material from "./Material Science & Engineering Society (1).svg"

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
          <img className="mse-logo" src={Logo} alt="Logo" width="72" height="72" />
          <img className="mat-text" src={Material} />
        </div>
      </label>
      <ul>
        <li><a class="active" href="#">Home</a></li>
        <li><a href="#">SPONSERS</a></li>
        <li><a href="#">CONTACT US</a></li>
        
      </ul>
    </nav>


    </>
  );
};

export default Navbar;





// <nav class="navbar navbar-expand-md navbar-dark bg-dark">
//         <a class="navbar-brand mx-4" href="/">
//           <img src={Logo} alt="Logo" width="72" height="72" />
//         </a>

//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item active">
//               <a class="nav-link mx-4 active" href="/">
//                 Home <span class="sr-only">(current)</span>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link mx-4" href="/events">
//                 Events
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link mx-4" href="/achievemnts">
//                 Achievments
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link mx-4" href="/qp">
//                 Question Papers
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link mx-4" href="/team">
//                 Team
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>



// nav class="navbar navbar-expand-sm bg-light">
  
//   <ul class="navbar-nav " style={{marginLeft:"auto"}}>
//       <li class="nav-item">
//           <a class="nav-link" href="#">
//             About
//           </a>
//       </li>
//       <li class="nav-item">
//           <a class="nav-link" href="#">
//             Contacts
//           </a>
//       </li>
//       <li class="nav-item">
//           <a class="nav-link" href="#">
//             Settings
//           </a>
//       </li>
//   </ul>
// </nav>