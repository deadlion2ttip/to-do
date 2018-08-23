import React, {Component} from 'react'

function ReminderCard(props){
    return(
        <li class='reminder-Card' key={props.title}>
            <h3 class='reminder-Title'>
                {props.title}
            </h3>
            <p class='remider-Description'>
                {props.description}
            </p>
        </li>
        
        
    )
}

export default ReminderCard