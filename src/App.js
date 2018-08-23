import React, { Component } from 'react';
import BodyColumn from './BodyColumn.js';
import ListColumn from './ListColumn.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      titleValue: '',
      descriptionValue:'',
      reminders: [],
      oldReminders: []
    }
    
    this.addReminder = this.addReminder.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }
  
  handleTitleChange(event) {
    this.setState({
      titleValue: event.target.value
    })
  }
  
  handleDescriptionChange(event) {
    this.setState({
      descriptionValue: event.target.value
    })
  }

  addReminder(){
    let title = this.state.titleValue
    let description = this.state.descriptionValue

    this.setState({
      oldReminders: this.state.reminders
    })

    let newReminders = this.state.reminders.concat([[title, description]])
    this.setState({
      reminders: newReminders
    })
    this.setState({
      titleValue: '',
      descriptionValue:'',
    })
  }
  render() {
    return (
      <div id="App">
      <header>Initial Reaction</header>
      <BodyColumn
      descriptionValue={this.state.descriptionValue}
      handleDescription={this.handleDescriptionChange}
      titleValue={this.state.titleValue} 
      handleTitle={this.handleTitleChange}
      addReminder={this.addReminder}
      />
      <ListColumn reminders = {this.state.reminders} />
      </div>
    );
  }
}

export default App;
