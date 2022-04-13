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
    let actualDay = new Date(props.day);
    let todayClass = actualDay.compare(today)?'today':'';

    let day = <td className='day-border'>
                <div className='day-content'>
                    <span className={`day-number ${todayClass}`}>{props.day.getDate()} {monthName}</span>
                </div>
            </td>;

    return(
        day
    );
}

export default Day;