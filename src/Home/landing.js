import React from "react";
import gif from "./landing.gif";
import "./landing.css";
const Landing = () => {
  return (
    <>
      <img
        style={{}}
        src={gif}
        class="img-fluid landing-img"
        alt="image not available"
      />
      <div className="landing-holder">Welcome Freshers 2023</div>
    </>
  );
};

export default Landing;
