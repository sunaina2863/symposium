import { React } from "react";
import "./team.css";
import ig1 from "./OIP.jpg";
const CardsM = ({ name, designation }) => {
  return (
    <>
      <div className="col-sm text-center">
        <div className="card border-support text-center team-support">
          <div className="card bg-black team-support">
            <img class="card-img-top" src={ig1} alt="Card" />
            <div
              className="card-body text-center"
              style={{
                background: "linear-gradient(#ffb347,#ffcc33)",
              }}
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

export default CardsM;
