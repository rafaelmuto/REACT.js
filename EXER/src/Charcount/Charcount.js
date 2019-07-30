import React from 'react';

const Charcount = props => {
  let resp = 'ok...';
  if (props.charCount < 5) {
    resp = 'too short!';
  }
  if (props.charCount > 10) {
    resp = 'too long!!!';
  }

  return (
    <div className="charcount">
      <p>
        Input here: <input onChange={props.countHandler} type="text" value={props.curString} />{' '}
      </p>

      <h2>Your input has: {props.charCount} characters...</h2>
      <h3> it's {resp}</h3>
    </div>
  );
};

export default Charcount;
