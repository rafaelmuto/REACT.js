import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [{ id: 'p0', name: 'Rafael', age: 33 }, { id: 'p1', name: 'Juliana', age: 25 }, { id: 'p2', name: 'Caio', age: 32 }, { id: 'p3', name: 'Mayara', age: 24 }, { id: 'p4', name: 'David', age: 25 }, { id: 'p5', name: 'Renan', age: 27 }, { id: 'p6', name: 'Emanuele', age: 18 }, { id: 'p7', name: 'Leal', age: 26 }, { id: 'p8', name: 'Kayque', age: 18 }, { id: 'p9', name: 'Eumesmo', age: '00' }],
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    // const personsUpdate = this.state.persons.splice();
    const personsUpdate = [...this.state.persons];
    personsUpdate.splice(personIndex, 1);
    this.setState({ persons: personsUpdate });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(element => element.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const personsNew = [...this.state.persons];
    personsNew[personIndex] = person;

    this.setState({ persons: personsNew });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    let personsList = null;

    if (this.state.showPersons) {
      personsList = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangeHandler} />;
    }

    return (
      <div className="App">
        <Cockpit clicked={this.togglePersonsHandler}>
          {personsList}
          <hr />
        </Cockpit>
      </div>
    );
  }
}

export default App;
