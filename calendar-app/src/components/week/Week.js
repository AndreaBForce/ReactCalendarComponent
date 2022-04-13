import React from 'react';
import "./week.css";
import Day from '../day/Day';

function Week(props){

    let days = new Array(7).fill(0);
    let day = new Date(props.weekDay);

    let first = 0;
    for (let i = 0; i < 7; i++) {
        day.setDate(day.getDate()+1*first);
        days[i] = new Date(day);
        first = 1;
    }

    return(
        <tr>
            {days.map( (d) => <Day day={d} key={d} /> )}
        </tr>
    );
}

export default Week;