import React from "react";
import "./events.css";
import Card from "./cards";
import png from "./events.png";
import td1 from "./Teachers-day-1.jpeg";
import td2 from "./Teachers-day-2.jpeg";
import mt1 from "./MaT1.jpeg";
import mt2 from "./Mat2.jpeg";
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
      "MSES organized a memorable trip to Qutub Minar for MLL 452 course students. Profs. Rajesh Prasad and Nityanand Goswami provided valuable guidance, uncovering the monument's material science aspects and historical significance. An enlightening and enjoyable real-world experience",
  },
  {
    id: 2,
    title: "Teachers Day",
    content: [td1, td2],
    description:
      "MSES celebrated Teachers' Day in LHC108 with Prof. Rajesh Prasad's inspiring speech. Enthusiastic students expressed gratitude towards teachers, creating a memorable event fostering respect and admiration within the community",
  },
  {
    id: 3,
    title: "Materials and Art",
    content: [mt1, mt2],
    description:
      "In MLL251, Professor Lakshmi Narayan guided a captivating techno-cultural term paper, Material and Art, showcasing students' innovative projects. From smart materials to sustainable engineering, creativity and expertise in combining materials and art were exhibited. The event was engaging and memorable, demonstrating students' passion and dedication.",
  },
  {
    id: 4,
    title: "Intern Ke Funde",
    content: [i1, i2],
    description:
      "MSES hosted Intern Ke Fundae on Feb 6, 2023. Seniors shared valuable internship experiences, offering comprehensive guidance on resumes, interviews, and networking. Students were empowered to pursue their career goals",
  },
  {
    id: 5,
    title: "Bollywood Day",
    content: [b1],
    description:
      "Tryst'23, in collaboration with MSES, hosted a captivating talk with Prof. Lakshmi Narayan Ramasubramanian, exploring misguided themes in Bollywood films. Attendees gained insightful life lessons from even the 'bad' movies, deepening their understanding of Indian cinema's cultural impact",
  },
  {
    id: 6,
    title: "Pitch Perfect",
    content: [p1, p2],
    description:
      "Pitch Perfect: Materials Edition by Tryst'23 and MSES was an exhilarating event showcasing innovative material concepts. Participants demonstrated creativity and problem-solving skills in one-minute pitches, impressing the judging panel. The competition highlighted the remarkable talent and imagination.",
  },

  {
    id: 7,
    title: "Freshers Party",
    content: [f1, f2],
    description:
      "The Material Science Department's Freshers Party warmly welcomed the new 2022 students. It fostered connections, friendships, and an inclusive environment filled with joy, music, and dance. MSES organized a memorable event where everyone felt a sense of belonging",
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
