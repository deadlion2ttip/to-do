import React, { Component } from 'react';
import ReminderList from './ReminderList.js'

function ListColumn(props){
    return(
        <div id='list-Column'>
            <h3>To Do:</h3>
            <ReminderList 
            reminders = {props.reminders} 
            delete = {props.delete}/>
        </div>
    )
}

export default ListColumn