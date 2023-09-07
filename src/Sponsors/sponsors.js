import React from "react";
import "./sponsors.css";
import background from './background.svg';
import member12 from './photo.jpeg';
const Sponsors = () => {
  return (
    <>
      <div className="container-fluid main">
        <img src={background} alt="jwef"/>
    </div>
        <div className="name-holder">
          <div className="banner-title">SPONSORS</div>
        </div>
        <div className="sponsors-container-boss" id="team">


        <div className="member-q sponsors-item">
          <img src={member12} className="sponsors-img" alt=" jcweofw"/>
          <div className="span">
            <h1>Convener</h1>
            <h2>Shivansh</h2>
          </div>
        </div>
        <div className="member-q sponsors-item">
          <img src={member12} className="sponsors-img" alt="ewjfn"/>
          <div className="span">
            <h1>Convener</h1>
            <h2>Shivansh</h2>
          </div>
        </div>
        <div className="member-q sponsors-item">
          <img src={member12} className="sponsors-img" alt="fjkwfv"/>
          <div className="span">
            <h1>Convener</h1>
            <h2>Shivansh</h2>
          </div>
        </div>
        <div className="member-q sponsors-item">
          <img src={member12} className="sponsors-img" alt="cjkewnc"/>
          <div className="span">
            <h1>Convener</h1>
            <h2>Shivansh</h2>
          </div>
        </div>
        <div className="member-q sponsors-item">
          <img src={member12} className="sponsors-img" alt="cmckwenk"/>
          <div className="span">
            <h1>Convener</h1>
            <h2>Shivansh</h2>
          </div>
        </div> 
        </div>
    </>
  );
};

export default Sponsors;
