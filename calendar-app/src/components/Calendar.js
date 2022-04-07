import React from 'react';
import './calendar.css';
import Month from './month/Month';

function Calendar(){

    {/* conterrà la vista per mese o per settimana */}
    return (
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
    );
}

export default Calendar;