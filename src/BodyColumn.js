import React, { Component } from 'react';

function BodyColumn(props){
    return(
        <div id='body-Column'>
            <span className='form-Wrap'>
                <label htmlFor='title-Input'>What Do You Need to Remember?</label>
                <input type='text' id='title-Input' onChange={props.handleTitle} value={props.titleValue}/>
            </span>
            <span className='form-Wrap'>
                <label htmlFor='description-Input'>Write something about this:</label>
                <textarea id='description-Input' onChange={props.handleDescription} value ={props.descriptionValue}></textarea>
            </span>
            <button onClick={props.addReminder}>Add Reminder</button>
        </div>
    )
}
export default BodyColumn

