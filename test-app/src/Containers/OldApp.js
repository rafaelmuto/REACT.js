import React, { Component } from 'react';
import './OldApp.css';

import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Person from '../components/Persons/Person/Person';
import Charcount from '../components/Charcount/Charcount';
import CharComponent from '../components/Charcomponent/Charcomponent';

class App extends Component {
  state = {
    username: 'dummyUserName',
    personname: 'dummyPersonName',
    displayPersons: false,
    persons: [{ id: 1, name: 'dummyUser', age: 1 }, { id: 2, name: 'Mr. Dummy Dummister', age: 64 }, { id: 3, name: 'rafaelmuto', age: 33 }, { id: 4, name: 'julianasumiya', age: 24 }],
    charstring: ''
  };

  nameChangerHandler = event => {
    this.setState({ username: event.target.value });
  };

  // Person Handlers:

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

  // Charcount Handlers:

  charCounterHandler = event => {
    const string = event.target.value;
    this.setState({ charstring: string });
  };

  charDeleteHandler = (event, id) => {
    const charArray = this.state.charstring.split('');
    charArray.splice(id, 1);
    const newString = charArray.join('');
    this.setState({ charstring: newString });
  };

  render() {
    let persons = null;

    if (this.state.displayPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person key={person.id} personName={person.name} age={person.age} nameChanger={event => this.changePersonNameHandler(event, person.id)} click={() => this.deletePersonHandler(index)} />;
          })}
        </div>
      );
    }

    let charList = (
      <div className="charlist">
        {this.state.charstring.split('').map((char, id) => {
          return <CharComponent charDeleteHandler={event => this.charDeleteHandler(event, id)} key={id} char={char} />;
        })}
      </div>
    );

    return (
      <div className="App">
        <hr />
        {charList}
        <Charcount countHandler={this.charCounterHandler} charCount={this.state.charstring.length} curString={this.state.charstring} />
        <hr />
        <ol>
          <li>DONE! Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>DONE? Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>DONE! Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>DONE! Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>DONE! Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>DONE! When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <button onClick={this.togglePersonsHandler}>show me the persons!</button>
        {persons}
        <hr />
        <UserInput changed={this.nameChangerHandler} currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="rafaelmuto" />
        <UserOutput userName="julianasumiya" />
        <UserOutput userName="caioverissimo" />
        <hr />
        <ol>
          <li>DONE! Create TWO new components: UserInput and UserOutput</li>
          <li>DONE! UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>DONE! Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>DONE! Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>DONE! Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>DONE! Add a method to manipulate the state (=> an event-handler method)</li>
          <li>DONE! Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>DONE! Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>DONE! Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>DONE! Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <hr />
      </div>
    );
  }
}

export default App;
