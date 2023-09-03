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
        <div className="team-container-boss" id="team">


        <div className="member-1 flex-item">
          <img src={member12} className="member-img" alt=" jcweofw"/>
          <div className="name">
            <h1>Convener</h1>
            <h2>Shivansh</h2>
          </div>
        </div>
        <div className="member-1 flex-item">
          <img src={member12} className="member-img" alt="ewjfn"/>
          <div className="name">
            <h1>Convener</h1>
            <h2>Shivansh</h2>
          </div>
        </div>
        <div className="member-1 flex-item">
          <img src={member12} className="member-img" alt="fjkwfv"/>
          <div className="name">
            <h1>Convener</h1>
            <h2>Shivansh</h2>
          </div>
        </div>
        <div className="member-1 flex-item">
          <img src={member12} className="member-img" alt="cjkewnc"/>
          <div className="name">
            <h1>Convener</h1>
            <h2>Shivansh</h2>
          </div>
        </div>
        <div className="member-1 flex-item">
          <img src={member12} className="member-img" alt="cmckwenk"/>
          <div className="name">
            <h1>Convener</h1>
            <h2>Shivansh</h2>
          </div>
        </div> 
        </div>
    </>
  );
};

export default Sponsors;
