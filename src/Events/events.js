import React from "react";
import "./events.css";
import Card from "./cards";
import png from "./events.png";
import td1 from "./Teachers-day-1.jpeg";
import q1 from "./Qutub-1.jpeg";
const cardData = [
  {
    id: 1,
    title: "Visit to Qutub Minar",
    content: [q1,"Text for the visit"],
  },
  {
    id: 2,
    title: "Teachers Day",
    content: [td1, "text for this event"],
    
  },
  {
    id: 3,
    title: "Materials and Art",
    content: [q1,"This is the content of card 1."],
  {
    id: 4,
    title: "Intern Ke Funde",
    content: "This is the content of card 2.",
  {
    id: 5,
    title: "Bollywood Day",
    content: "This is the content of card 1.",
  {
    id: 6,
    title: "Pitch Perfect",
    content: "This is the content of card 2.",
  {
    id: 7,
    title: "Freshers Party",
    content: [],
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
