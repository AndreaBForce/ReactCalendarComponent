import React from 'react';
import "./day.css";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function Day(props){
    
    let day = <td className='day-border'>
        <div>
            {props.num.getDate()}
            <div>
                {props.daydata.map((item)=>(
                <div key={item.id}>
                    <p>---------------------</p>
                    <p>{item.title}</p>
                    <p>{item.calendar}</p>
                    <p>{item.date}</p>
                    <p>---------------------</p>
                </div>    
            ))}
            </div>
        </div>
    </td>;

    if(props.num.getDate() == 1){
        //console.log(props.num.getMonth())
        day = <td className='day-border'>{props.num.getDate()} {monthNames[props.num.getMonth()]}</td>;
    }
    

    return(
        day
    );
}

export default Day;