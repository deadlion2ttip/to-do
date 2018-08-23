import React, {Component} from 'react'

function ReminderCard(props){
    let deleteFunction = () => props.delete(props.index)
    return(
        <li className='reminder-Card' key={props.title}>
            <span value={props.index} onClick={deleteFunction}>X</span>
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