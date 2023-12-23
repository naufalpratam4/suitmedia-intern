import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

function CardComponent({ image, name, price }) {
  return (
    <Container>
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Text>{price}</Card.Text>
          <Card.Text className="fw-semibold">{name}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardComponent;
