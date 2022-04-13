import React, {useState,useEffect} from 'react';
import './calendar.css';
import FilterCalendar from './filtercalendarsection/FilterCalendar';
import Month from './month/Month';
import Search from './searchsection/Search.js'

function Calendar(props){
    const [checkedState, setCheckedState] = useState(
        new Array(props.calendar.length).fill(true)
      );
    
    const [filteredData,setFilteredData] = useState(props.data);

    let today = new Date();
    let dateformatted = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    

    

    const handleCheckboxChange = (item) => {
        console.log(item)

        setFilteredData(props.data.filter((element) => element.calendar.includes(item)));
        
    }   

    return (
        <div>
        <h1>{dateformatted}</h1>
        <h2>{props.calendar}</h2>
        <Search data={filteredData} search={props.search}></Search>
        <FilterCalendar calendars={props.calendar} onHandleChange={handleCheckboxChange}></FilterCalendar>
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
                <Month data={filteredData}/>
            </tbody>
        </table>
                
        </div>
    );
}

export default Calendar;