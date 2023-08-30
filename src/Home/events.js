import React, { useState, useEffect } from 'react';
import './events.css'; // Import your CSS file for styling
import {eventData} from "./eventData";

function Events() {

  return (
    <div className="event-gallery">
      <h2>Event Gallery</h2>
      <div className="event-list">
        {eventData.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <p className="event-title">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;