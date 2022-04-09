import './search.css';
import React, {useState} from 'react';

function ResultList(props){
    return(
        <div>
            {
            props.data.map((item)=>(
            <div key={item.id}>
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
        </div>
    );
}

export default ResultList;