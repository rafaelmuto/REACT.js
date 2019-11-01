import React from 'react';
import './Person.css';

const person = props => {
  return (
    <div className="Person">
      <hr />
      <h2>I'm a {props.name}.</h2>
      <h4>I'm {props.age} years old.</h4>
      <p>Lorem esse deserunt amet consectetur dolore voluptate commodo ut ea nulla dolor. Dolor excepteur qui ad ipsum sunt cupidatat amet exercitation laborum anim pariatur ad. Velit ullamco sit minim ex qui qui amet cupidatat. Cupidatat voluptate fugiat cupidatat ut reprehenderit cillum id labore cillum est sint officia.</p>

      <input type="text" onChange={props.changed} value={props.name} />
      <button onClick={props.click}>delete me!!!</button>

      <hr className="glyph" />
    </div>
  );
};

export default person;
