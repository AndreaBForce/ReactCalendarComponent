import './search.css';
import ResultList from './ResultList';
import React, {useState} from 'react';

function Search(props){
    const [query, setQuery] = useState("");
    const [filterData,setFilterData] = useState([]);

    const search_items = (search_value)=>{
        setQuery(search_value)
        if(props.search !== undefined){
            if(search_value !== ''){
                fetch(props.search+search_value).then(function(response){
                    return response.json();
                })
                .then(function(myJson) {
                    setFilterData(myJson)
                });
            }else{
                setFilterData([]);
            }
        }else{
            setFilterData(props.data.filter((element) => {
                //if no input the return the original
                if (props.input === '') {
                    return false;
                }else {
                    //return the item which contains the user input
                    return (element.title.toLowerCase().includes(query.toLowerCase()) || element.description.toLowerCase().includes(query.toLowerCase()))
                }
            })
            );
        }
    };

    return(
        <div>
            <h1>SEARCH BAR SECTION</h1>
            <input placeholder="Search" onChange={event => search_items(event.target.value)}/>   
            <ResultList input={query} data={filterData} ></ResultList>
        </div>
    );
}

export default Search;