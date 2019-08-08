import React from './node_modules/react';

const style = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '5px',
  border: '1px solid black'
};

const Charcomponent = props => {
  return (
    <div onClick={props.charDeleteHandler} className="charcomponent" style={style}>
      <p>{props.char}</p>
    </div>
  );
};

export default Charcomponent;
