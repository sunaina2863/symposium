import React from "react";
import "./about_us.css";

const AboutUs = () => {
  return (
    <>
      <div class="container py-5">
        <div class="container body-title px-1 " style={{ width: "40%" }}>
          <p style={{ color: "white" }}>ABOUT US</p>
        </div>
        <div class="container body-text px-5 py-5" style={{ width: "80%" }}>
          <p style={{ color: "white" }} className="about-us">
            MSES is the departmental society of Materials Science and
            Engineering department. Materials Science and Engineering (MSE)
            combines engineering, physics, chemistry, computational principles
            and creativity to solve problems related to biotechnology,
            manufacturing, information technology, nano materials and
            electronics. In light of this interdisciplinary tradition, most MSES
            events are open to all departments. Others like a visit to Qutub
            Minar or Materials and Art highlight our creative side, and that of
            materials science in general.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
