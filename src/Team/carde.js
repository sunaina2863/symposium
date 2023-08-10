import React from "react";
import "./team.css";
const CardsE = ({ name, designation, url }) => {
  return (
    <>
      <div className="col-md-4 text-center">
        <div className="card border-support text-center team-support-2">
          <div className="card bg-black team-support-2">
            <img class="card-img-top" src={url} alt="Card" />
            <div
              className="card-body text-center"
              style={{ background: "linear-gradient(#d9d9d9,#5b5959)" }}
            >
              <p className="card-text">{name}</p>
              <span> {designation}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsE;
