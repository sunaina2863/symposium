import { React } from "react";
import CardsM from "./cardm.js";
import CardsC from "./cardc.js";
import CardsE from "./carde.js";
import teamBg from "./team-bg.png";
import lovish from "./Lovish_Overall Coordinator .jpg";
import prof from "./prof.jpeg";
import sunaina from "./sunaina_das_coordi.png";
import rashi from "./Rashi Rajanna_PG Coordinator .jpg";
import harsh from "./HarshKumar_events_Coordi.JPG";
import yuvraj from "./Yuvraj_exe.jpg";
import aryan from "./Aryan_Publi exe.jpeg";
import chirag from "./Chirag_TechExecutive.jpg";
import gargi from "./Gargi_Publi_Exe.jpg";
import divyansh from "./divyansh_Events_Exe.jpg";
import manoj from "./Manoj Kumar gorle_tech exe.jpg";
import prasuk from "./Prasuk_jain_Events_exe.jpg";
import vivek from "./Vivek_Publi Exe.PNG";
import vidhi from "./VidhiAgarwal_Events_exe.jpg";
const cardDataTeam = [
  {
    id: 1,
    name: "Lovish",
    designation: "Overall Coordinator",
    url: lovish,
  },
  {
    id: 2,
    name: "Dr. R.Lakshmi Narayan",
    designation: "Faculty Coordinator",
    url: prof,
  },
];
const cardDataTeam2 = [
  {
    id: 1,
    name: "Rashi Rajanna",
    designation: "PG Coordinator",
    url: rashi,
  },
  {
    id: 2,
    name: "Sunaina",
    designation: "Tech Coordinator",
    url: sunaina,
  },
  {
    id: 3,
    name: "Harsh",
    designation: "Events Coordinator",
    url: harsh,
  },
];
const cardDataTeam3 = [
  {
    id: 1,
    name: "Aryan",
    designation: "Publicity Executive",
    url: aryan,
  },
  {
    id: 2,
    name: "Yuvraj",
    designation: "Design Executive",
    url: yuvraj,
  },
  {
    id: 3,
    name: "Chirag",
    designation: "Tech Executive",
    url: chirag,
  },
  {
    id: 4,
    name: "Gargi",
    designation: "Publicity Executive",
    url: gargi,
  },
  {
    id: 5,
    name: "Divyansh",
    designation: "Events Executive",
    url: divyansh,
  },
  {
    id: 6,
    name: "Manoj",
    designation: "Tech Executive",
    url: manoj,
  },
  {
    id: 7,
    name: "Prasuk",
    designation: "Events Executive",
    url: prasuk,
  },
  {
    id: 8,
    name: "Vidhi",
    designation: "Events Executive",
    url: vidhi,
  },
  {
    id: 9,
    name: "Vivek",
    designation: "Publicity Executive",
    url: vivek,
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
              url={card.url}
            />
          ))}
        </div>
        <div className="row">
          {cardDataTeam2.map((card) => (
            <CardsC
              key={card.id}
              name={card.name}
              designation={card.designation}
              url={card.url}
            />
          ))}
        </div>
        <div className="row">
          {cardDataTeam3.map((card) => (
            <CardsE
              key={card.id}
              name={card.name}
              designation={card.designation}
              url={card.url}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Team;
