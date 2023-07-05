import { React } from "react";
import Cards from "./card.js";
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
  {
    id: 4,
    name: "Lovish",
    designation: "PG Coordinator",
  },
  {
    id: 5,
    name: "Lovish",
    designation: "PG Coordinator",
  },
];
const cardDataTeam3 = [
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
            <Cards
              key={card.id}
              name={card.name}
              designation={card.designation}
            />
          ))}
        </div>
        <div className="row">
          {cardDataTeam2.map((card) => (
            <Cards
              key={card.id}
              name={card.name}
              designation={card.designation}
            />
          ))}
        </div>
        <div className="row">
          {cardDataTeam3.map((card) => (
            <Cards
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
