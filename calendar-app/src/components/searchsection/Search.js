import './search.css';
import ResultList from './ResultList';
import React, {useState} from 'react';

function Search(props){
    const [query, setQuery] = useState("")


    return(
        // avrà una lista di week
        <div>
            <h1>SEARCH BAR SECTION</h1>
            <input placeholder="Search" onChange={event => setQuery(event.target.value)}/>
            
            <ResultList input={query} data={props.data} ></ResultList>
        </div>
    );
}

export default Search;