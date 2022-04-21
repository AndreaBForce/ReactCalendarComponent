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
                        props.daydata.map((item,id)=>(
                            <div key={id} onClick={() => clickedAction(item)} >{item.title}</div>
                        ))
                    }
                </div>
            </td>;

    return(
        day
    );
}

export default Day;