import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
      personsList = this.state.persons.map((person, index) => {
        return <Person key={person.id} name={person.name} age={person.age} click={() => this.deletePersonHandler(index)} changed={event => this.nameChangeHandler(event, person.id)} />;
      });
    }

    return (
      <div className="App">
        <hr />
        <h1>Hi, this is a REACT app!</h1>
        <hr />
        <p>Lorem esse deserunt amet consectetur dolore voluptate commodo ut ea nulla dolor. Dolor excepteur qui ad ipsum sunt cupidatat amet exercitation laborum anim pariatur ad. Velit ullamco sit minim ex qui qui amet cupidatat. Cupidatat voluptate fugiat cupidatat ut reprehenderit cillum id labore cillum est sint officia.</p>
        <p>In nulla commodo commodo est minim nostrud Lorem dolor irure ullamco sint est. Proident laborum culpa voluptate velit enim irure proident esse dolor et sint aute pariatur. Eiusmod in labore culpa voluptate ut consectetur nisi aliqua dolor reprehenderit officia cillum. Aliquip Lorem proident excepteur eu in dolore aute cillum Lorem reprehenderit ex labore irure pariatur.</p>
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
