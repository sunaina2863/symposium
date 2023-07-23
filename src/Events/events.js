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
