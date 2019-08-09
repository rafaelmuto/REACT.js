import React, { Component } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  // #1 lifecycle hook: contructor():
  constructor(props) {
    super(props);
    console.log('[App.js] #1 lifecycle hook:  constructor()');

    // same thing as calling state outside constructor()
    // react actually runs this in the background.
    this.state = {
      displayPersons: false,
      persons: [{ id: 1, name: 'dummyUser', age: 1 }, { id: 2, name: 'Mr. Dummy Dummister', age: 64 }, { id: 3, name: 'rafaelmuto', age: 33 }, { id: 4, name: 'julianasumiya', age: 24 }, { id: 5, name: 'caioverissimo', age: 32 }]
    };
  }

  // #2 lifecycle hook: getDerivedStateFromProps():
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] #2 lifecycle hook:  getDerivedStateFromProps()', props);
    return state;
  }

  // #4 lifecycle hook: componentDidMount():
  componentDidMount() {
    console.log('[App.js] #4 lifecycle hook:  componentDidMount()');
  }

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

  // #3 lifecycle hook: render():
  render() {
    console.log('[App.js] #3 lifecycle hook:  render()');
    let persons = null;

    if (this.state.displayPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.changePersonNameHandler} />;
    }

    return (
      <div className="App">
        <Cockpit title={this.props.appTitle} clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
