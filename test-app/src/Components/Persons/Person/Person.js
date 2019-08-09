import React, { Component } from 'react';

import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] person rendering...');

    return (
      <div className={classes.Person}>
        <h1>Person [{Date.now()}]</h1>
        <h4>
          {this.props.personName} is {this.props.age}
        </h4>
        <p>Ex aliqua quis velit velit quis aute officia reprehenderit consequat commodo et. Qui sint ullamco laborum proident eu aute sint veniam. Pariatur ut aliquip irure nostrud commodo adipisicing ea occaecat.</p>
        <input onChange={this.props.nameChanger} type="text" value={this.props.personName} />
        <button className={classes.btn} onClick={this.props.click}>
          delete me!
        </button>
      </div>
    );
  }
}

export default Person;
