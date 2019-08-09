import React from 'react';

const cockpit = props => {
  console.log('[Cockpit.js] cockpit rendering...');

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.clicked}>show me the persons!</button>
    </div>
  );
};

export default cockpit;
