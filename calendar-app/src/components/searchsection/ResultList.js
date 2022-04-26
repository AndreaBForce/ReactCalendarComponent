import './search.css';
import React, {useState} from 'react';

function ResultList(props){
    function hexToRgba(hex){
        let r = parseInt(hex[1]+hex[1], 16),
            g = parseInt(hex[2]+hex[2], 16),
            b = parseInt(hex[3]+hex[3], 16);

        return 'rgba('+r+', '+g+', '+b+', '+0.6+')';
    }

    return(
        <div className='search-result'>
            {
            props.data.map((item)=>(
            <div key={item.id} className='search-event' style={{background: `${hexToRgba(props.calendars.find( (elem) => elem.name === item.calendar).color)}`}}>
                {item.title}
            </div>    
            ))
            }
        </div>
    );
}

export default ResultList;