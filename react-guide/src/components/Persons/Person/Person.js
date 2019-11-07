import React from 'react';

import styles from './Person.module.css';
import Lorem from '../../Lorem/Lorem';

const person = props => {
  return (
    <div className={styles.Person}>
      <hr />
      <h2>I'm {props.name}.</h2>
      <h4>I'm {props.age} years old.</h4>
      {/* <p>Lorem esse deserunt amet consectetur dolore voluptate commodo ut ea nulla dolor. Dolor excepteur qui ad ipsum sunt cupidatat amet exercitation laborum anim pariatur ad. Velit ullamco sit minim ex qui qui amet cupidatat. Cupidatat voluptate fugiat cupidatat ut reprehenderit cillum id labore cillum est sint officia.</p> */}
      <Lorem ipsum={1} />

      <input type="text" maxLength="19" onChange={props.changed} value={props.name} />
      <button onClick={props.click}>delete me!!!</button>

      <hr className="glyph" />
    </div>
  );
};

export default person;
