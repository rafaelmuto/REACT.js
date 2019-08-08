import React from 'react';

const cockpit = props => {
  return (
    <div>
      <h1>This is a React App!!!</h1>
      <button onClick={props.clicked}>show me the persons!</button>
    </div>
  );
};

export default cockpit;
