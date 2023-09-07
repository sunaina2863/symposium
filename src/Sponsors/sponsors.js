import React from "react";
import "./sponsors.css";
import background from "./background.svg";
import sponsor1 from "./R.jpg";
const Sponsors = () => {
  return (
    <>
      <div className="container-fluid main">
        <img src={background} alt="jwef" />
      </div>
      <div className="name-holder">
        <div className="banner-title">SPONSORS</div>
      </div>
      <div className="sponsors-container-boss" id="team">
        <div className="member-q sponsors-item">
          <img src={sponsor1} className="sponsors-img" alt=" jcweofw" />
          <div className="span">
            <h1>Gold</h1>
            <h2> xyz </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
