import { React } from "react";
import CardsM from "./cardm.js";
import CardsC from "./cardc.js";
import CardsE from "./carde.js";
import teamBg from "./team-bg.png";
const cardDataTeam = [
  {
    id: 1,
    name: "Lovish",
    designation: "Overall Coordinator",
  },
  {
    id: 2,
    name: "Lovish",
    designation: "Faculty Coordinator",
  },
  {
    id: 3,
    name: "Lovish",
    designation: "PG Coordinator",
  },
];
const cardDataTeam2 = [
  {
    id: 1,
    name: "Lovish",
    designation: "Coordinator",
  },
  {
    id: 2,
    name: "Lovish",
    designation: "Coordinator",
  },
  {
    id: 3,
    name: "Lovish",
    designation: "Coordinator",
  },
  {
    id: 4,
    name: "Lovish",
    designation: "Coordinator",
  },
  {
    id: 5,
    name: "Lovish",
    designation: "Coordinator",
  },
];
const cardDataTeam3 = [
  {
    id: 1,
    name: "Lovish",
    designation: "Executive",
  },
  {
    id: 2,
    name: "Lovish",
    designation: "Executive",
  },
  {
    id: 3,
    name: "Lovish",
    designation: "Executive",
  },
];
function Team() {
  return (
    <>
      <div className="container-fluid main">
        <img src={teamBg} class="img-fluid" alt="not available" />
      </div>
      <hr />
      <div className="container-fluid">
        <div className="row">
          {cardDataTeam.map((card) => (
            <CardsM
              key={card.id}
              name={card.name}
              designation={card.designation}
            />
          ))}
        </div>
        <div className="row">
          {cardDataTeam2.map((card) => (
            <CardsC
              key={card.id}
              name={card.name}
              designation={card.designation}
            />
          ))}
        </div>
        <div className="row">
          {cardDataTeam3.map((card) => (
            <CardsE
              key={card.id}
              name={card.name}
              designation={card.designation}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Team;
