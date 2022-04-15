import './filtercalendar.css';
import React, {useState} from 'react';

function FilterCalendar(props){
    
    return(
        <div>
            <h1>FILTER CALENDAR SECTION</h1>
            <div>
            {
            props.calendars.map((item, id)=>(
                <div key={id}>
                    <input type="checkbox" value={item.name} onChange={()=> props.onHandleChange(item.name)} defaultChecked></input>
                    <label>{item.name}</label>
                </div>
            ))
            }
            </div>
        </div>
    );
}

export default FilterCalendar;