import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, this is a REACT app!</h1>
        <hr />
        <p>Occaecat proident exercitation enim dolore Lorem consectetur minim. Aliqua sit eiusmod adipisicing deserunt id fugiat non. Aute veniam magna do ullamco minim nostrud labore pariatur. Ut ad reprehenderit dolor nisi nostrud et.</p>
        <hr />
        <Person name="Rafael" age="33">
          i like coding!
        </Person>
        <Person name="Juliana" age="25">
          i like playing drums!
        </Person>
      </div>
    );
  }
}

export default App;
