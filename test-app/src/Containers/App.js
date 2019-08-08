import React, { Component } from './node_modules/react';
import './App.css';

import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    username: 'dummyUserName',
    personname: 'dummyPersonName',
    displayPersons: false,
    persons: [{ id: 1, name: 'dummyUser', age: 1 }, { id: 2, name: 'Mr. Dummy Dummister', age: 64 }, { id: 3, name: 'rafaelmuto', age: 33 }, { id: 4, name: 'julianasumiya', age: 24 }],
    charstring: ''
  };

  togglePersonsHandler = () => {
    this.setState({ displayPersons: !this.state.displayPersons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  changePersonNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.displayPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.changePersonNameHandler} />
        </div>
      );
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler}>show me the persons!</button>
        {persons}
      </div>
    );
  }
}

export default App;
