import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

const recipeCard = props => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
      <Card.Title>label</Card.Title>
      <Card.Text>
        source
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem><span className="text-success">100</span> calories</ListGroupItem>
      <ListGroupItem><span className="text-success">2</span> ingredientsLength</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

export default recipeCard;
