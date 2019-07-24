import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Person from './Person/Person';

class App extends Component {
  state = {
    username: 'dummyUserName',
    personname: 'dummyPersonName',
    displayPersons: false
  };

  nameChangerHandler = event => {
    this.setState({ username: event.target.value });
  };

  personChangerHandler = evet => {
    this.setState({ personname: evet.target.value });
  };

  togglePersonsHandler = () => {
    this.setState({ displayPersons: !this.state.displayPersons });
  };

  render() {
    return (
      <div className="App">
        <hr />
        <button onClick={this.togglePersonsHandler}>show me the persons!</button>
        {this.state.displayPersons ? (
          <div>
            <Person nameChanger={this.personChangerHandler} personName={this.state.personname} />
            <Person personName="Mr. Dummy Dummyster" />
          </div>
        ) : null}

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
