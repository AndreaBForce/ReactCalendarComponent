import './filtercalendar.css';
import React from 'react';

function FilterCalendar(props){

    function hexToRgba(hex, alpha){
        let r = parseInt(hex[1]+hex[1], 16),
            g = parseInt(hex[2]+hex[2], 16),
            b = parseInt(hex[3]+hex[3], 16);

        return 'rgba('+r+', '+g+', '+b+', '+alpha+')';
    }
    
    return(
        <div>
            <h2>Calendars</h2>
            <div className='cal-list'>
            {props.calendars.map((item, id)=>(
                <div key={id} className='cal-item' style={{"--cal-item-bg":`${hexToRgba(item.color, 0.6)}`, '--cal-item-bg-hover':`${hexToRgba(item.color, 1)}`}}>
                    <label className='cal-label'>
                        {item.name}
                        <input type="checkbox" className='cal-checkbox' value={item.name} onChange={()=> props.onHandleChange(item.name)} defaultChecked></input>
                        <span className='cal-checkmark'></span>
                    </label>
                </div>
            ))}
            </div>
        </div>
    );
}

export default FilterCalendar;