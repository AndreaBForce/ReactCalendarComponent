import React, { useState } from 'react';
import Clock from './Clock'
import ClockLine from './ClockLine';
import "../day/day.css"
import "./weekView.css"

function WeekView(props){

    Date.prototype.compare = function(d) {
        return this.getFullYear() === d.getFullYear()
          && this.getDate() === d.getDate()
          && this.getMonth() === d.getMonth();
    }

    function compareDate(str1, d1){
        // str1 format should be dd/mm/yyyy. Separator can be anything e.g. / or -. It wont effect
        //fonte https://stackoverflow.com/questions/8224459/how-to-create-a-date-object-from-string-in-javascript
        var dt1   = parseInt(str1.substring(0,2));
        var mon1  = parseInt(str1.substring(3,5));
        var yr1   = parseInt(str1.substring(6,10));
        var date1 = new Date(yr1, mon1-1, dt1);
        return date1.compare(d1);
    }

    function calculatePos(element){
        let hours = parseInt(element.timeStart.substring(0,2));
        let minutes = parseInt(element.timeStart.substring(3,5));
        let res = (hours*60+minutes)/1440*100;
    
        return res-0.54;
    }

    function calculateHeight(element){
        let startHours = parseInt(element.timeStart.substring(0,2));
        let startMinutes = parseInt(element.timeStart.substring(3,5));
        let endHours = parseInt(element.timeEnd.substring(0,2));
        let endMinutes = parseInt(element.timeEnd.substring(3,5));

        let res = (endHours*60+endMinutes) - (startHours*60+startMinutes);

        res = res/1440*100;

        return res < 1? 1:res;
    }

    let firstDay = new Date(props.actualDay.getFullYear(), props.actualDay.getMonth(), 1);

    let day1 = new Date(props.actualDay);
    day1.setHours(0,0,0);
    day1.setHours(-24*(day1.getUTCDay()));

    firstDay.setDate(-firstDay.getUTCDay()+1);

    let weekEvents = [];
    let dayLabels = [];
    for (let i = 0; i < 7; i++) {
        weekEvents[i] = props.data.filter( (obj) => compareDate(obj.date, day1));
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
        cells.push(<div className='wv-day-div' key={i}>{weekEvents[i].map( (ev) => <div className='wv-event' key={ev.id} style={{top: `${calculatePos(ev)}%`, height: `${calculateHeight(ev)}%`}}>{ev.title}</div>)}{dailyCells}</div>);
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