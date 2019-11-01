import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Rafael', age: 33 }, { name: 'Juliana', age: 25 }, { name: 'Caio', age: 32 }]
  };

  deletePersonHandler = personIndex => {
    const personsUpdate = this.state.persons;
    personsUpdate.splice(personIndex, 1);
    this.setState({ persons: personsUpdate });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    let personsList = null;

    if (this.state.showPersons) {
      personsList = this.state.persons.map((person, index) => {
        return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)} />;
      });
    }

    return (
      <div className="App">
        <hr />
        <h1>Hi, this is a REACT app!</h1>
        <hr />
        <p>Occaecat proident exercitation enim dolore Lorem consectetur minim. Aliqua sit eiusmod adipisicing deserunt id fugiat non. Aute veniam magna do ullamco minim nostrud labore pariatur. Ut ad reprehenderit dolor nisi nostrud et.</p>
        <hr />

        {personsList}

        <button onClick={this.togglePersonsHandler}>click ME!</button>
        <hr className="glyph" />
      </div>
    );
  }
}

export default App;
