import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

const recipeCard = props => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant='top' src={props.imgSrc} />
    <Card.Body>
      <Card.Title>{props.label}</Card.Title>
      <Card.Text>{props.source}</Card.Text>
    </Card.Body>
    <ListGroup className='list-group-flush'>
      <ListGroupItem>
        <span className='text-success'>{props.calories.toFixed(2)}</span>{' '}
        calories
      </ListGroupItem>
      <ListGroupItem>
        <span className='text-success'>{props.ingredientsLength}</span>{' '}
        ingredients
      </ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Button variant='primary' onClick={props.click}>Go to recipe</Button>
    </Card.Body>
  </Card>
);

export default recipeCard;
