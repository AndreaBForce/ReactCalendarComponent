import React, { useState } from 'react';
import Clock from './Clock'
import ClockLine from './ClockLine';
import "../day/day.css"
import "./weekView.css"

function WeekView(props){

    let firstDay = new Date(props.actualDay.getFullYear(), props.actualDay.getMonth(), 1);

    let day1 = new Date(props.actualDay);
    day1.setHours(0,0,0);
    day1.setHours(-24*(day1.getUTCDay()));

    firstDay.setDate(-firstDay.getUTCDay()+1);

    let dayLabels = [];
    for (let i = 0; i < 7; i++) {
        dayLabels.push(day1.toLocaleString('en-EN', {weekday: 'short', day: '2-digit'}))
        day1.setDate(day1.getDate()+1);
    }

    let hours = [];
    for(let i = 0; i < 25; i++){
        hours.push(firstDay.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'}));
        firstDay.setHours(firstDay.getHours()+1);
    }

    let dailyCells = [];
    for(let i = 0; i < 24; i++){
        dailyCells.push(<div className='day-border wv-daily-cell' key={(i+10)*10}></div>);
    }

    let cells = [];
    for(let i = 0; i < 7; i++){
        cells.push(<div className='wv-day-div' key={i}>{dailyCells}</div>);
    }

    // console.log(weeksDays[0].toLocaleString('en-EN', {weekday: 'short'}));
    
    return (
        <div className='wv-container'>
            <div className='wv-header'>
                <div className='wv-header-labels'>
                    {dayLabels.map( (dd,id) => <div key={id}>{dd}</div>)}
                </div>
            </div>
            <div className='wv-body'>
                <div className='wv-hours'>
                    <Clock key={9999}/>
                    {hours.map( (hh, id) => <div key={id}>{hh}</div>)}
                </div>
                <div className='wv-content'>
                    <ClockLine key={999999}/>
                    {cells}
                </div>
            </div>

        </div>
    );
}

export default WeekView;