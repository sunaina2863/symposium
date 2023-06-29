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
    borderColor: "#D8F3DC",
  };
  const footerStyle = {
    background: "#1E1F1F",
    color: "#FEFAE0",
    padding: "15px 0 0",
  };
  const contactUsStyle = {
    color: "#FEFAE0",
  };
  return (
    <>
      <footer className="container-fluid text-center p-3" style={footerStyle}>
        <h3 className="pb-3 ">Follow us on </h3>
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
          <a style={contactUsStyle} href="tel:9334169466">
            9334169466
          </a>
        </div>
        <div style={copyRightStyle} className="border-top pt-3">
          <p>©Copyright DMSE, IIT Delhi</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
