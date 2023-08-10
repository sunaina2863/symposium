import { React } from "react";
import achiveBg from "./acheive.png";
import CardA from "./carda";
import "./achivements.css";
import harsh from "./photos/20/Harsh_Kumar_OCS_CTM.jpg";
import sameer from "./photos/20/Sameer Akhtar_OC Edc.jpg";
import ram from "./photos/20/Ram_Munde_OC_OCS_Convener_MS.PNG";
import rajat from "./photos/20/rajat.jpeg";
import aliza from "./photos/21/Aliza_Cultural secretary .JPG";
import siddant from "./photos/21/Cultural Secretary, Kumaon_Siddhant Dad.jpg";
import sarthak from "./photos/21/Sarthak_Convenor.jpg";
import aditya from "./photos/20/aditya.jpeg";
const cardData20 = [
  {
    id: 1,
    url: sameer,
    achivement: "OC @ eDC",
    name: "Sameer Akthar",
  },
  {
    id: 2,
    url: ram,
    achivement: "Tech OC @ OCS",
    name: "Ram Munde",
  },
  {
    id: 3,
    url: rajat,
    achivement: "CTM @ Dev Club",
    name: "Rajat Gupta",
  },
  {
    id: 4,
    url: aditya,
    achivement: "Co-OC @ eDc",
    name: "Aaditya",
  },
];
const cardData21 = [
  {
    id: 1,
    url: harsh,
    achivement: "CTM @ OCS",
    name: "Harsh Kumar",
  },
  {
    id: 2,
    url: aliza,
    achivement: " Cultural Secretary",
    name: "Aliza",
  },
  {
    id: 3,
    url: siddant,
    achivement: " Cultural Secretary",
    name: "Siddhant",
  },
  {
    id: 4,
    url: sarthak,
    achivement: "Convenor",
    name: "Sarthak",
  },
];

function Achivements() {
  return (
    <>
      <div className="container-fluid main">
        <img src={achiveBg} class="img-fluid" alt="not available" />
        {/* @dev name-holder css #inherited from events.css */}
        <div className="name-holder">Achivements</div>
      </div>
      <div className="text-center text-white h2" style={{ paddingTop: "30px" }}>
        Batch of 2020
      </div>
      <div className="container-fluid text-center">
        <div
          className="row"
          style={{ paddingTop: "30px", margin: "auto", maxWidth: "1000px" }}
        >
          {cardData20.map((cardAchiv) => (
            <CardA
              dataId={cardAchiv.id}
              urlAchive={cardAchiv.url}
              achivement={cardAchiv.achivement}
              name={cardAchiv.name}
            />
          ))}
        </div>
      </div>
      <div className="text-center text-white h2" style={{ paddingTop: "30px" }}>
        Batch of 2021
      </div>
      <div className="container-fluid text-center">
        <div
          className="row"
          style={{ paddingTop: "30px", margin: "auto", maxWidth: "1000px" }}
        >
          {cardData21.map((cardAchiv) => (
            <CardA
              dataId={cardAchiv.id}
              urlAchive={cardAchiv.url}
              achivement={cardAchiv.achivement}
              name={cardAchiv.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Achivements;
