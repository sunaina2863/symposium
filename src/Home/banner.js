import React from "react";
import BannerBG from "./banner-back.png";
import "./banner.css";
const Banner = () => {
  return (
    <>
      <div className="container-fluid main">
        <img src={BannerBG} class="img-fluid" alt="not available" />
        <div className="name-holder">
          <div className="banner-top-text">Symposium</div>
          <div className="banner-title">Dravyakrit</div>
          <div className="banner-caption">Where Materials Meet Innovation</div>
        </div>
      </div>
    </>
  );
};

export default Banner;
