import React, { useState } from 'react';
import './calendar.css';
import Month from './month/Month';
import Search from './searchsection/Search.js'

function Calendar(props){
    const [actualDay, setActualDay] = useState(new Date());

    // let actualDay = new Date();
    let monthTextual = actualDay.toLocaleString('en-EN', {month: 'long', year: 'numeric'}).toLowerCase();
    
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
                        <button className='btn'>Week</button>
                        <button className='btn'>Month</button>
                    </div>
                    <div className='btn-group'>
                        <button className='btn' onClick={ () => setActualDay(new Date(actualDay.getFullYear(), actualDay.getMonth()-1, 1))}> &#60; </button>
                        <button className='btn' onClick={ () => setActualDay(new Date())}>Today</button>
                        <button className='btn' onClick={ () => setActualDay(new Date(actualDay.getFullYear(), actualDay.getMonth()+1, 1))}> &#62; </button>
                    </div>
                </div>
                <table>
                    <thead className='day-label'>
                        <tr>
                            <td>mon</td>
                            <td>tue</td>
                            <td>wed</td>
                            <td>thu</td>
                            <td>fri</td>
                            <td>sat</td>
                            <td>sun</td>
                        </tr>
                    </thead>
                    <tbody>
                        <Month actualDay={actualDay}/>
                    </tbody>
                </table>
            </div>
            <div className='search-container'>
                <Search data={props.data} search={props.search}></Search>
            </div>
        </div>
    );
}

export default Calendar;