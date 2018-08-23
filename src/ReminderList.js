import React, {Component} from 'react'
import ReminderCard from './ReminderCard.js';

function ReminderList(props){
 let reminderCards = props.reminders.map((reminder, i) => {
    return(
        <ReminderCard 
        key={reminder[0]} 
        index={i} 
        title={reminder[0]} 
        description={reminder[1]}
        delete = {props.delete} />
    )
 })

    return(
        <ul id='reminder-List'>
            {reminderCards}
        </ul>
    )
}

export default ReminderList