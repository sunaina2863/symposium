import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

const Footer = () => {
  const copyRightStyle = {
    borderColor: "#00EED0",
    fontSize: "1.3rem", // Updated font size
    fontFamily: "Inria Sans Bold", // Updated font style
  };
  const footerStyle = {
    background: "#02153D",
    color: "#00EED0",
    padding: "15px 0 0",
  };
  const contactUsStyle = {
    color: "#00EED0",
    fontSize: "1.3rem", // Updated font size
    fontFamily: "Inria Sans Bold", // Updated font style
  };
  
  return (
    <>
      <footer className="container-fluid text-center p-3" style={footerStyle}>
        <h2 className="pb-3 ">Follow us on </h2>
        <div className="social-icons">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="xl" className="icon mx-2" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="xl" className="icon mx-2" />
          </a>
          <a
            href="https://www.instagram.com/mses.iitd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              className="icon mx-2"
            />
          </a>
        </div>
        <div className="contact pt-5 pb-3">
          <p>Contact Us</p>
          <a style={contactUsStyle} href="mailto:ms1200751@iitd.ac.in">
            ms1200751@iitd.ac.in
          </a>
          <br></br>
          <a style={contactUsStyle} href="tel:6283262790">
            6283262790
          </a>
        </div>
        <div style={copyRightStyle} className="border-top pt-3 copyright">
          <p>©Copyright DMSE, IIT Delhi</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
