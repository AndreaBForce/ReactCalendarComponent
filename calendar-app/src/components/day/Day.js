import React from 'react';
import "./day.css";

function Day(props){

    Date.prototype.compare = function(d) {
        return this.getFullYear() === d.getFullYear()
          && this.getDate() === d.getDate()
          && this.getMonth() === d.getMonth();
    }
    
    let monthName = props.day.getDate() === 1? props.day.toLocaleString('en-EN', {month: 'short'}):"";

    let today = new Date();
    let todayClass = props.day.compare(today)?'today':'';
    let thisMonthClass = props.day.getMonth() === props.actualDay.getMonth()?'':'text-opaque';

    let day = <td className='day-border'>
                <div className='day-content'>
                    <span className={`day-number ${todayClass} ${thisMonthClass}`}>{props.day.getDate()} {monthName}</span>
                </div>
            </td>;

    return(
        day
    );
}

export default Day;