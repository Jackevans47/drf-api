// Event.js
import React from "react";
import { Card, Button } from "react-bootstrap"; // Adjust based on your design
import { Link } from "react-router-dom";

function Event({
  id,
  track,
  country,
  event_date,
  race_type,
  content,
  ticket_link,
}) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{track}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{country}</Card.Subtitle>
        <Card.Text>{event_date}</Card.Text>
        <Card.Text>{race_type}</Card.Text>
        <Card.Text>{content}</Card.Text>
        {ticket_link && (
          <Button variant="primary" href={ticket_link} target="_blank">
            Buy Tickets
          </Button>
        )}
        <Link to={`/EventDetailPage.js/${id}`}>View Event</Link>
      </Card.Body>
    </Card>
  );
}

export default Event;
