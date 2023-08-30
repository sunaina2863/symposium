import React from 'react';
import './events.css';
import eventsdata from './events.json';

function EventGallery() {
  return (
    <div className="event-gallery">
      <h2>Event Gallery</h2>
      <div className="event-list">
        {eventsdata.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.event} className="event-image" />
            <div className="event-details">
              <p className="event-title">{event.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventGallery;
