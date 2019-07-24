import React from 'react';

const userInput = props => {
  const inlineStyle = {
    border: '1px solid black',
    width: '55%'
  };
  return <input style={inlineStyle} type="text" onChange={props.changed} value={props.currentName} />;
};

export default userInput;
