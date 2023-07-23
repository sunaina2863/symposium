import React from "react";
import "./events.css";
import Card from "./cards";
import png from "./events.png";
import td1 from "./Teachers-day-1.jpeg";
import q1 from "./Qutub-1.jpeg";
//@dev instructions for adding json attribute content
// add at max 2 images and desctiption as a must
const cardData = [
  {
    id: 1,
    title: "Visit to Qutub Minar",
    content: [q1, q1],
    description: "Hello world this is a description.",
  },
  {
    id: 2,
    title: "Teachers Day",
    content: [td1, td1],
    description: "Hello world this is a description. Just to entertain",
  },
  {
    id: 3,
    title: "Materials and Art",
    content: "This is the content of card 1.",
    description: "Hello world this is a description.",
  },
  {
    id: 4,
    title: "Intern Ke Funde",
    content: [td1, td1],
    description: "Hello world this is a description.",
  },
  {
    id: 5,
    title: "Bollywood Day",
    content: "This is the content of card 1.",
    description: "Hello world this is a description.",
  },
  {
    id: 6,
    title: "Pitch Perfect",
    content: "This is the content of card 2.",
    description: "Hello world this is a description.",
  },

  {
    id: 7,
    title: "Freshers Party",
    content: [],
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
  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#D6D3D3",
    textDecorationLine: "underline",
    fontSize: "96px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "11.52px",
  };
  return (
    <>
      <div className="container-fluid text-center" style={introStyle}>
        <img src={png} class="img-fluid" alt="not available" />
        <div style={textStyle}>Events</div>
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
