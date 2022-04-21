import React, { useState } from 'react';
import './calendar.css';
import Month from './month/Month';
import WeekView from './weekView/WeekView';
import Search from './searchsection/Search.js'

function Calendar(props){
    const [actualDay, setActualDay] = useState(new Date());
    const [monthView, setMonthView] = useState(false);

    function handleNextBtn(){
        setActualDay(new Date(actualDay.getFullYear(), actualDay.getMonth()+1, 1));
        console.log("next "+actualDay);
    }

    function handlePrevBtn(){
        setActualDay(new Date(actualDay.getFullYear(), actualDay.getMonth()-1, 1));
    }

    // let actualDay = new Date();
    let monthTextual = actualDay.toLocaleString('en-EN', {month: 'long', year: 'numeric'}).toLowerCase();
    let view;
    if (monthView) {
        view = <Month actualDay={actualDay} />;
    }else{
        view = <WeekView actualDay={actualDay} />;
    }
    
    return (
        <div className='calendar-container'>
            <div className='filter-container'>
                {/* {props.calendar.map( (c) => <p>{c}</p>)} */}
            </div>
            <div className='view-container'>
                <div className='view-header'>
                    <div className='view-title'>
                        <h1>{monthTextual}</h1>
                    </div>
                    <div className='btn-group'>
                        <button className='btn' onClick={ () => setMonthView(false)}>Week</button>
                        <button className='btn' onClick={ () => setMonthView(true)}>Month</button>
                    </div>
                    <div className='btn-group'>
                        <button className='btn' onClick={handlePrevBtn}> &#60; </button>
                        <button className='btn' onClick={ () => setActualDay(new Date())}>Today</button>
                        <button className='btn' onClick={handleNextBtn}> &#62; </button>
                    </div>
                </div>
                <div>
                    {view}
                </div>
            </div>
            <div className='search-container'>
                <Search data={props.data} search={props.search}></Search>
            </div>
        </div>
    );
}

export default Calendar;