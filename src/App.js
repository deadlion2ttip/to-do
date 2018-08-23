import React, { Component } from 'react';
import BodyColumn from './BodyColumn.js';
import ListColumn from './ListColumn.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      reminders : [['Another card','lets see if another one works'],['Finish This App', 'Look at this super long description its so great']]
    }
  }
  render() {
    return (
      <div id="App">
        <header>Initial Reaction</header>
        <BodyColumn />
        <ListColumn reminders = {this.state.reminders} />
      </div>
    );
  }
}

export default App;
