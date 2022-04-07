import './search.css';
import React, {useState} from 'react';

function ResultList(props){
    
    const filteredData = props.data.filter((element) => {
        //if no input the return the original
        if (props.input === '') {
            return false;
        }
        //return the item which contains the user input
        else {
            return (element.title.toLowerCase().includes(props.input.toLowerCase()) || element.description.toLowerCase().includes(props.input.toLowerCase()))
        }
    })


    return(
        <div>
            {
            filteredData.map((item)=>(
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