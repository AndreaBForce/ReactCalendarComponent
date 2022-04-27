import './search.css';
import React, {useState} from 'react';

function ResultList(props){
    function hexToRgba(hex, alpha){
        let r = parseInt(hex[1]+hex[1], 16),
            g = parseInt(hex[2]+hex[2], 16),
            b = parseInt(hex[3]+hex[3], 16);

        return 'rgba('+r+', '+g+', '+b+', '+alpha+')';
    }

    let clickedAction = props.clickHandler;

    return(
        <div className='search-result'>
            {
            props.data.map((item)=>(
            <div key={item.id} className='sc-event cursor-pointer' onClick={() => clickedAction(item)} style={{"--sc-event-bg": `${hexToRgba(props.calendars.find( (elem) => elem.name === item.calendar).color, 0.6)}`,"--sc-event-bg-hover": `${hexToRgba(props.calendars.find( (elem) => elem.name === item.calendar).color, 1)}`}}>
                {/* <p>Title</p> */}
                <h4>{item.title}</h4>
                <div className='sc-event-info'><span>Date:</span> {item.date}</div>
                <div className='sc-event-info'><span>Time:</span> {item.timeStart}-{item.timeEnd}</div>
            </div>    
            ))
            }
        </div>
    );
}

export default ResultList;