import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  render() {
    console.log('[Persons.js] persons rendering...');

    return this.props.persons.map((person, index) => {
      return <Person key={person.id} personName={person.name} age={person.age} nameChanger={event => this.props.changed(event, person.id)} click={() => this.props.clicked(index)} />;
    });
  }
}

export default Persons;
