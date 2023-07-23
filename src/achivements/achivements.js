import { React } from "react";
import achiveBg from "./acheive.png";
import CardA from "./carda";
import "./achivements.css";
import vivek from "./vivek.jpeg";
const cardData20 = [
  {
    id: 1,
    url: vivek,
    achivement: "OC @ eDC",
    name: "hi",
  },
  {
    id: 2,
    url: vivek,
    achivement: "OC @ mses",
    name: "hi",
  },
  {
    id: 3,
    url: vivek,
    achivement: "OC @ mses",
    name: "hi",
  },
];
const cardData21 = [
  {
    id: 1,
    url: vivek,
    achivement: "OC @ eDC",
    name: "hi",
  },
  {
    id: 2,
    url: vivek,
    achivement: "OC @ mses",
    name: "hi",
  },
];
const cardData22 = [
  {
    id: 1,
    url: vivek,
    achivement: "OC @ eDC",
    name: "hi",
  },
  {
    id: 2,
    url: vivek,
    achivement: "OC @ mses",
    name: "hi",
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
      <div className="text-center text-white h2" style={{ paddingTop: "30px" }}>
        Batch of 2022
      </div>
      <div className="container-fluid text-center">
        <div
          className="row"
          style={{ paddingTop: "30px", margin: "auto", maxWidth: "1000px" }}
        >
          {cardData22.map((cardAchiv) => (
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
