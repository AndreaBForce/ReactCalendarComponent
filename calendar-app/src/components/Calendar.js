import React from 'react';
import './calendar.css';
import Month from './month/Month';
import Search from './searchsection/Search.js'

function Calendar(props){
    let today = new Date();
    let monthTextual = today.toLocaleString('en-EN', {month: 'long', year: 'numeric'});
    
    return (
        <div className='calendar-container'>
            <div className='filter-container'>
                {props.calendar.map( (c) => <p>{c}</p>)}
            </div>
            <div className='view-container'>
                <h1>{monthTextual}</h1>
                <table>
                    <thead className='day-label'>
                        <tr>
                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                            <td>Sun</td>
                        </tr>
                    </thead>
                    <tbody>
                        <Month />
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