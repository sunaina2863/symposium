import React from "react";
import { eventData } from "./eventData";
import "./events.css";
function Events() {
  return (
    <div className="event-gallery">
      <h2>Events</h2>
      <div className="container" style={{ background: "url(./back.png)" }}>
        <div class="row g-5 my-5 pb-5 ">
          {eventData.map((event) => (
            <div class="col-md-6">
              <div key={event.id} className="card">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />
                <div class="card-body">
                  {/* <p class="card-text">{event.desc}</p> */}
                  <p class="card-text"> Venue: {event.venue} </p>
                  <p class="card-text"> Date: {event.date} </p>
                  <p class="card-text"> Time: {event.time} </p>
                </div>
                <div class="card-footer">
                  <div>
                    <a href="/">Regsiter Here</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
