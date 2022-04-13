import React from 'react';
import "./day.css";

function Day(props){
    
    let day = <td className='day-border'>
                <div className='day-content'>
                    <span className='day-number'>{props.num.getDate()}</span>
                </div>
            </td>;

    if(props.num.getDate() == 1){
        let monthName = props.num.toLocaleString('en-EN', {month: 'short'});
        day = <td className='day-border'><div className='day-content'><span className='day-number'>{props.num.getDate()} {monthName}</span></div></td>;
    }
    

    return(
        day
    );
}

export default Day;