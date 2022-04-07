import React from 'react';
import './calendar.css';
import Month from './month/Month';
import Search from './searchsection/Search.js'

function Calendar(props){
    let today = new Date();
    let dateformatted = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    return (
        <div>
        <h1>{dateformatted}</h1>
        <h2>{props.calendar}</h2>
        <Search data={props.data}></Search>
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

       {/*<div>
        {
        props.data && props.data.length>0 && props.data.map((item)=>(
            <div>
                <p>---------------------</p>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.date}</p>
                <p>{item.timeStart}</p>
                <p>{item.timeEnd}</p>
                <p>{item.Calendar}</p>
                <p>---------------------</p>
            </div>    
            ))
        }
        </div>*/}
        
        </div>
    );
}

export default Calendar;