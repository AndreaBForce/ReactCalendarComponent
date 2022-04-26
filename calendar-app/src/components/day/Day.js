import React from 'react';
import "./day.css";

function Day(props){

    let clickedAction = (item) =>{
        console.log("default calendar click")
    }

    Date.prototype.compare = function(d) {
        return this.getFullYear() === d.getFullYear()
          && this.getDate() === d.getDate()
          && this.getMonth() === d.getMonth();
    }

    function hexToRgba(hex){
        let r = parseInt(hex[1]+hex[1], 16),
            g = parseInt(hex[2]+hex[2], 16),
            b = parseInt(hex[3]+hex[3], 16);

        return 'rgba('+r+', '+g+', '+b+', '+0.6+')';
    }

    if(props.clickHandler != undefined){
        clickedAction = props.clickHandler;    
    }
    
    let monthName = props.day.getDate() === 1? props.day.toLocaleString('en-EN', {month: 'short'}):"";

    let today = new Date();
    let todayClass = props.day.compare(today)?'today':'';
    let thisMonthClass = props.day.getMonth() === props.actualDay.getMonth()?'':'text-opaque';

    let day = <td className='day-border day-td-cell'>
                <div className='day-content'>
                    <span className={`day-number ${todayClass} ${thisMonthClass}`}>{props.day.getDate()} {monthName}</span>
                    {
                        props.daydata.map( (item,id) => (
                            
                            <div className='day-event' style={{background: `${hexToRgba(props.calendars.find( (elem) => elem.name === item.calendar).color)}`}} key={id} onClick={() => clickedAction(item)} >{item.title.substring(0,11)}...</div>
                        ))
                    }
                </div>
            </td>;

    return(
        day
    );
}

export default Day;