import React, {useState,useEffect} from 'react';
import './calendar.css';
import FilterCalendar from './filtercalendarsection/FilterCalendar';
import Month from './month/Month';
import Search from './searchsection/Search.js'

function Calendar(props){
    
    //Dati eventi e calendari
    const [totalData, setTotalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [calendars, setCalendars]=useState([]);
    const [selectedItems, setSelectedItems]=useState([]);

    let today = new Date();
    let dateformatted = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    

    const getData=(url,setX)=>{
        fetch(url).then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setX(myJson)
          });
      }

    //Uso per inizializzare i dati del calendario, controllo se da API o da locale
    useEffect(()=>{
        if(props.url_data !== undefined && props.url_calendars !== undefined){
            getData(props.url_data,setFilteredData);
            getData(props.url_data,setTotalData);
            getData(props.url_calendars,setCalendars)
        }else if(props.data !== undefined && props.calendar){
            setFilteredData(props.data);
            setTotalData(props.data);
            setCalendars(props.calendars);
        }
    },[])
    

    //Gestisce il click delle checkbox del calendario 
    //TODO MIGLIORARE CON OGGETTI
    const handleCheckboxChange = (item) => {
        
        if(selectedItems.includes(item)){
            //Rimuove l'item nel selected Items
            setSelectedItems(selectedItems.filter((element) => element !== item));
        }else{
            //Inserisce l'item nel selected items
            setSelectedItems(selectedItems => [...selectedItems,item] );
        }
    }  

    //Questo use effect, viene chiamato ogni volta che viene chiamato il set selected Items
    useEffect(()=>{
        let temp_data = totalData;

        //Cicla su ogni calendario e filtra per ogni evento
        //TODO MIGLIORARE CON OGGETTI
        selectedItems.forEach((element)=>{
            temp_data = temp_data.filter((event_event)=> event_event.calendar != element);
        });
        setFilteredData(temp_data);
    },[selectedItems])

    return (
        <div>
        <h1>{dateformatted}</h1>
        
        <Search data={filteredData} search={props.search}></Search>
        <FilterCalendar calendars={calendars} onHandleChange={handleCheckboxChange}></FilterCalendar>
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
                <Month data={filteredData} clickHandler={props.clickHandler}/>
            </tbody>
        </table>
                
        </div>
    );
}

export default Calendar;