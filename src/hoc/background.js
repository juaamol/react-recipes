import React from 'react';
import TableBg from '../assets/table.jpg';
import './background.css';

const background = props => (
  <React.Fragment>
    <div id='bg'>
      <img src={TableBg} alt=" wood table"/>
    </div>
    {props.children}
  </React.Fragment>
);

export default background;
