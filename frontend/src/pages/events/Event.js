import React from "react";
import { Card } from "react-bootstrap"; // Adjust based on your design
import styles from "../../styles/Event.module.css"; // Import custom styles

function Event({ id, track, country, event_date, race_type, content }) {
  return (
    <Card className={`${styles.eventCard} mb-3`}>
      <Card.Body>
        <Card.Title className={styles.eventTitle}>{track}</Card.Title>
        <Card.Subtitle className={`${styles.eventSubtitle} mb-2 text-muted`}>
          {country}
        </Card.Subtitle>
        <Card.Text className={styles.eventText}>{event_date}</Card.Text>
        <Card.Text className={styles.eventText}>{race_type}</Card.Text>
        <Card.Text className={styles.eventContent}>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Event;
