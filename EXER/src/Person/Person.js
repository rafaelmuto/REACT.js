import React from 'react';

import './Person.css';

const Person = props => {
  return (
    <div className="Person">
      <h1>Person [{Date.now()}]</h1>
      <h4>{props.personName}</h4>
      <p>Ex aliqua quis velit velit quis aute officia reprehenderit consequat commodo et. Qui sint ullamco laborum proident eu aute sint veniam. Pariatur ut aliquip irure nostrud commodo adipisicing ea occaecat.</p>
      <input onChange={props.nameChanger} type="text" value={props.personName} />
    </div>
  );
};

export default Person;
