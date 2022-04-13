import React from 'react';
import "./month.css";
import Week from '../week/Week';

function Month(props){

    let firstDay = new Date(props.actualDay.getFullYear(), props.actualDay.getMonth(), 1);

    firstDay.setDate(-firstDay.getUTCDay()+1);

    let weeksDays = [];
    let first = 0;
    for (let i = 0; i < 6; i++) {
        firstDay.setDate(firstDay.getDate()+7*first);
        weeksDays[i] = new Date(firstDay);
        first = 1;
    }

    return (
        weeksDays.map( (wd) => <Week weekDay={wd} actualDay={props.actualDay} key={wd.getTime()} /> )
    );
}

export default Month;