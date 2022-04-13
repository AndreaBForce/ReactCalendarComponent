import React from 'react';
import "./week.css";
import Day from '../day/Day';

function Week(props){

    let days = new Array(7).fill(0);
    let day = new Date(props.weekDay);

    let first = 0;
    for (let i = 0; i < 7; i++) {
        day.setDate(day.getDate()+1*first);
        days[i] = new Date(day);
        first = 1;
    }

    //Funzione che mi ritorna una date indipedentemente dal separatore
    function compareDate(str1){
        // str1 format should be dd/mm/yyyy. Separator can be anything e.g. / or -. It wont effect
        //fonte https://stackoverflow.com/questions/8224459/how-to-create-a-date-object-from-string-in-javascript
        var dt1   = parseInt(str1.substring(0,2));
        var mon1  = parseInt(str1.substring(3,5));
        var yr1   = parseInt(str1.substring(6,10));
        var date1 = new Date(yr1, mon1-1, dt1);
        return date1;
    }

    return(
        <tr>
            {days.map( (d) => <Day num={d} key={d} 
            daydata={
                props.data.filter((element)=>{
                    console.log() 
                    return  compareDate(element.date).getTime() == d.getTime();
                })} /> )}
        </tr>
    );
}

export default Week;