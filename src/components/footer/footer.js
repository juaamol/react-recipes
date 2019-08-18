import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './footer.css';

const footer = props => (
  <Jumbotron className='bg-dark mb-0 rounded-0 text-light mt-10rem'>
    <div className="d-flex justify-content-center">
      <button class='fa fa-facebook' />
      <button class='fa fa-twitter' />
      <button class='fa fa-linkedin' />
      <button class='fa fa-instagram' />
    </div>
  </Jumbotron>
);

export default footer;
