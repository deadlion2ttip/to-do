import React, {Component} from 'react'
import ReminderCard from './ReminderCard.js';

function ReminderList(props){
 let reminderCards = props.reminders.map((reminder) => {
    return(
        <ReminderCard title={reminder[0]} description={reminder[1]} />
    )
 })

    return(
        <ul id='reminder-List'>
            {reminderCards}
        </ul>
    )
}

export default ReminderList