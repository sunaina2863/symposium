import React, { useState, useEffect } from 'react';
import {eventData} from "./eventData";

function Events() {

  return (
    <div className="event-gallery">
      <h2>Events</h2>
      <div className="container">   
          <div class="row g-5 my-5 pb-5 px-5">
          {eventData.map(event => (
            <div class="col-6">
              <div key={event.id} className="card">
                <img src={event.image} alt={event.title} className="event-image" style={{}}/>
                <div class="card-body">
                  {/*<h5 class="card-title">{event.title}</h5>*/}
                  <p class="card-text">{event.desc}</p>
                  <p class="card-text"> Venue: {event.venue} </p>
                  <p class="card-text"> Date: {event.date} </p>
                  <p class="card-text"> Time: {event.time} </p>
                </div>
                <div class="card-footer">
                  <div> <a href="#" class="btn ">Regsiter Here</a></div>
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