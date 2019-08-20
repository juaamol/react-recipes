import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './footer.css';

const footer = props => (
  <Jumbotron className='bg-dark mb-0 rounded-0 text-light mt-10rem'>
    <div className="d-flex justify-content-center">
      <button className='fa fa-facebook' />
      <button className='fa fa-twitter' />
      <button className='fa fa-linkedin' />
      <button className='fa fa-instagram' />
    </div>
  </Jumbotron>
);

export default footer;
