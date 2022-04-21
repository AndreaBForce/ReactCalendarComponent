import React, {useState,useEffect} from 'react';
import './calendar.css';
import FilterCalendar from './filtercalendarsection/FilterCalendar';
import Month from './month/Month';
import WeekView from './weekView/WeekView';
import Search from './searchsection/Search.js'

function Calendar(props){
    
    //Dati eventi e calendari
    const [totalData, setTotalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [calendars, setCalendars]=useState([]);
    const [selectedItems, setSelectedItems]=useState([]);

    let today = new Date();

    const [actualDay, setActualDay] = useState(new Date());
    const [monthView, setMonthView] = useState(true);

    function handleNextBtn(){
        setActualDay(new Date(actualDay.getFullYear(), actualDay.getMonth()+1, 1));
    }

    function handlePrevBtn(){
        setActualDay(new Date(actualDay.getFullYear(), actualDay.getMonth()-1, 1));
    }

    
    let monthTextual = actualDay.toLocaleString('en-EN', {month: 'long', year: 'numeric'}).toLowerCase();
    let view;

    if (monthView) {
        view = <Month actualDay={actualDay} data={filteredData} clickHandler={props.clickHandler} calendars={calendars}/>;
    }else{
        view = <WeekView actualDay={actualDay} />;
    }
    
    const getData=(url,setX)=>{
        fetch(url).then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setX(myJson)
          });
      }

    //Uso per inizializzare i dati del calendario, controllo se da API o da locale
    //TODO: Testare il case se il socio ne mette uno dei due e basta
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
    //Filtra gli elementi presenti che verranno mostrati o meno
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
        <div className='calendar-container'>
            <div className='filter-container'>
                <FilterCalendar calendars={calendars} onHandleChange={handleCheckboxChange}></FilterCalendar>
            </div>
            <div className='view-container'>
                <div className='view-header'>
                    <div className='view-title'>
                        <h1>{monthTextual}</h1>
                    </div>
                    <div className='btn-group'>
                        <button className='btn' onClick={ () => setMonthView(false)}>Week</button>
                        <button className='btn' onClick={ () => setMonthView(true)}>Month</button>
                    </div>
                    <div className='btn-group'>
                        <button className='btn' onClick={handlePrevBtn}> &#60; </button>
                        <button className='btn' onClick={ () => setActualDay(new Date())}>Today</button>
                        <button className='btn' onClick={handleNextBtn}> &#62; </button>
                    </div>
                </div>
                <div>
                    {view}
                </div>
            </div>
            <div className='search-container'>
                <Search data={filteredData} search={props.search}></Search>
            </div>
        </div>
    );
}

export default Calendar;