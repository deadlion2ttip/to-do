import React, {Component} from 'react'

function ReminderCard(props){
    return(
        <li className='reminder-Card' key={props.title}>
            <h3 className='reminder-Title'>
                {props.title}
            </h3>
            <p className='remider-Description'>
                {props.description}
            </p>
        </li>
        
        
    )
}

export default ReminderCard