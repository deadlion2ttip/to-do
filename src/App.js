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
    
    this.deleteReminder = this.deleteReminder.bind(this)
    this.addReminder = this.addReminder.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }
  
  componentDidMount(){
    console.log(JSON.parse(localStorage.getItem('to-do-list')))
    if (localStorage.getItem('to-do-list')){
    this.setState({
      reminders: JSON.parse(localStorage.getItem('to-do-list'))
    })
  }
  }

  deleteReminder(index){
   
    let newReminders = this.state.reminders.filter((reminder, i) => {
      if (i === index){
        return false
      } else {
        return true
      }
    })

    localStorage.setItem('to-do-list', JSON.stringify(newReminders))
    this.setState({
      reminders: newReminders
    })
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

    localStorage.setItem('to-do-list', JSON.stringify(newReminders))

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
      <ListColumn 
      
      reminders = {this.state.reminders}
      delete = {this.deleteReminder}
       />
      </div>
    );
  }
}

export default App;
