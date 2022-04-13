import './filtercalendar.css';
import React, {useState} from 'react';

function FilterCalendar(props){
    
    return(
        <div>
            <h1>FILTER CALENDAR SECTION</h1>
            <div>
            {
            props.calendars.map((item)=>(
                <div>
                    <input type="checkbox" value={item} onChange={()=> props.onHandleChange(item)} defaultChecked></input>
                    <label>{item}</label>
                </div>
            ))
            }
            </div>
        </div>
    );
}

export default FilterCalendar;