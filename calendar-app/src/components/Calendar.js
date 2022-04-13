import React from 'react';
import './calendar.css';
import Month from './month/Month';
import Search from './searchsection/Search.js'

function Calendar(props){
    let actualDay = new Date();
    let monthTextual = actualDay.toLocaleString('en-EN', {month: 'long', year: 'numeric'});
    
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