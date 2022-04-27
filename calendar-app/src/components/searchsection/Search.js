import './search.css';
import ResultList from './ResultList';
import React, {useState} from 'react';

//TODO FIXARE LA SEARCH RICHIESTE SOSPESE PER IL ROBO
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

    function handleBtnSearch(){
        document.getElementById('inP').focus();
    }

    return(
        <div className='search-content'>
            <h2>Search events</h2>
            <div className='search-box'>
                <button className='btn-search' onClick={handleBtnSearch}>
                    <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                </button>
                <input type="text" id='inP' placeholder="Type to Search..." className='search-input' onChange={event => search_items(event.target.value)}/>   
            </div>
            <ResultList data={filterData} clickHandler={props.clickHandler} calendars={props.calendars} ></ResultList>
        </div>
    );
}

export default Search;