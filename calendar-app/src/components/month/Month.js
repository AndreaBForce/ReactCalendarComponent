import React from 'react';
import "./month.css";
import Week from '../week/Week';

function Month(){

    let today = new Date(2022, 5, 4);
    let firstDay = new Date(today.getFullYear(), today.getMonth(), 1);

    firstDay.setDate(-firstDay.getUTCDay()+1);

    let weeksDays = [];
    let first = 0;
    for (let i = 0; i < 5; i++) {
        firstDay.setDate(firstDay.getDate()+7*first);
        weeksDays[i] = new Date(firstDay);
        first = 1;
    }

    return (
        weeksDays.map( (wd) => <Week weekDay={wd} key={wd.getDate()} /> )
    );
}

export default Month;