import React from "react";
import "./events.css";
import Card from "./cards";
import png from "./events.png";
import td1 from "./Teachers-day-1.jpeg";
import td2 from "./Teachers-day-2.jpeg";
import mt1 from "./MaT1.JPG";
import mt2 from "./MaT2.JPG";
import i1 from "./intern1.jpeg";
import i2 from "./intern2.jpeg";
import b1 from "./bollywoodDay.jpeg";
import p1 from "./pitch1.jpeg";
import p2 from "./pitch2.jpeg";
import f1 from "./freshersParty1.jpeg";
import f2 from "./freshersParty2.jpeg";
import q1 from "./Qutub-1.jpeg";
//@dev instructions for adding json attribute content
// add at max 2 images and desctiption as a must
const cardData = [
  {
    id: 1,
    title: "Qutub Minar",
    content: [q1, q1],
    description:
      "Hello world this is a description. Hello world this is a description. Just to entertain Hello world this is a description. Just to entertain",
  },
  {
    id: 2,
    title: "Teachers Day",
    content: [td1, td2],
    description: "Hello world this is a description. Just to entertain",
  },
  {
    id: 3,
    title: "Materials and Art",
    content: [mt1 , mt2],
    description: "Hello world this is a description.",
  },
  {
    id: 4,
    title: "Intern Ke Funde",
    content: [i1, i2],
    description: "Hello world this is a description.",
  },
  {
    id: 5,
    title: "Bollywood Day",
    content: [b1],
    description: "Hello world this is a description.",
  },
  {
    id: 6,
    title: "Pitch Perfect",
    content: [p1,p2],
    description: "Hello world this is a description.",
  },

  {
    id: 7,
    title: "Freshers Party",
    content: [f1, f2],
    description: "Hello world this is a description.",
  },
];
const Events = () => {
  let backgroundColor = "black";
  const rowStyle = {
    background: backgroundColor,
    color: "#FEFAE0",
    height: "auto",
  };
  const introStyle = {
    background: backgroundColor,
    color: "#FEFAE0",
    height: "calc(100vh - 60px)",
  };

  return (
    <>
      {/*@dev main division css rules inherited from team.css */}
      <div className="container-fluid text-center main" style={introStyle}>
        <img src={png} class="img-fluid" alt="not available" />
        <div className="name-holder">Events</div>
      </div>
      <div className="container-fluid text-center">
        <div className="row" style={rowStyle}>
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              keyVal={card.id}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
