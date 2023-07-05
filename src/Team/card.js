import { React } from "react";
import "./team.css";
import ig1 from "./OIP.jpg";
const Cards = ({ name, designation }) => {
  return (
    <>
      <div className="col-sm text-center">
        <div className="card border-support text-center">
          <div className="card bg-black">
            <img class="card-img-top" src={ig1} alt="Card" />
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
export default Cards;
