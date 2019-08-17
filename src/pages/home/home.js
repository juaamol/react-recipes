import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import SaladBowl from '../../assets/salad.jpg';
import Dessert from '../../assets/dessert.jpg';
import SeaFood from '../../assets/sea-food.jpg';
import './home.css';

const rowDish = props => {
  let leftItem = (
    <Col className="hide-sm">
      <div className='w-300px' />
    </Col>
  );
  let rightItem = (
    <Col className='d-sm-flex justify-content-sm-center'>
      <Image src={props.image} roundedCircle />
    </Col>
  );

  let justify = 'end';
  let order = 'order-sm-1';
  let auxItem;

  if (props.left) {
    // Switch left and right items
    justify = 'start';
    order = '';
    auxItem = leftItem;
    leftItem = rightItem;
    rightItem = auxItem;
  }

  return (
    <Row
      className={
        'mt-5 justify-content-' + justify + ' align-items-center text-light'
      }
    >
      {leftItem}
      <Col className={order}>
        <div className='d-flex align-items-center bg-dark pl-4 pr-4 pt-2 pb-2 mt-sm-2'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea
            veritatis esse laborum harum perferendis incidunt. Eum voluptatibus,
            iste magnam obcaecati quisquam molestias mollitia optio laborum,
            commodi est reprehenderit assumenda!
          </p>
        </div>
      </Col>
      {rightItem}
    </Row>
  );
};

const RowDish = rowDish;

const home = props => (
  <React.Fragment>
    <h1 className='title display-1 font-weight-bold text-center mt-sm-5'>
      Salad Bowl
    </h1>
    <h1 className='text-center mt-sm-1'>Healthy and Tasty</h1>
    <Container className='mt-5'>
      <RowDish image={SaladBowl} left />
      <RowDish image={SeaFood} />
      <RowDish image={Dessert} left />
    </Container>
  </React.Fragment>
);

export default home;
