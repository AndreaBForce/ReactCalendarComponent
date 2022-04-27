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
    const [actualDay, setActualDay] = useState(new Date());
    const [monthView, setMonthView] = useState(props.month === true?true:false);

    function handleNextBtn(){
        if(monthView){
            setActualDay(new Date(actualDay.getFullYear(), actualDay.getMonth()+1, 1));
        }else{
            // setActualDay(actualDay.setHours(7*24));
            actualDay.setHours(7*24);
            setActualDay(new Date(actualDay));
            console.log(actualDay);
        }
    }

    function handlePrevBtn(){
        if(monthView){
            setActualDay(new Date(actualDay.getFullYear(), actualDay.getMonth()-1, 1));
        }else{
            // setActualDay(new Date(actualDay.getFullYear(), actualDay.getMonth(), actualDay.getUTCDay()-7));
            // setActualDay(actualDay.setHours(-7*24));
            actualDay.setHours(-7*24);
            setActualDay(new Date(actualDay));
            console.log(actualDay);
        }
    }
    
    let monthName = actualDay.toLocaleString('en-EN', {month: 'long'}).toLowerCase();
    let yearText = actualDay.toLocaleString('en-EN', {year: 'numeric'}).toLowerCase();
    

    //Uso per inizializzare i dati del calendario, controllo se da API o da locale
    useEffect(()=>{
        if(props.url_data !== undefined && props.url_calendars !== undefined){
            getData(props.url_data,setFilteredData);
            getData(props.url_data,setTotalData);
            getData(props.url_calendars,setCalendars)
            
        }else if(props.data !== undefined && props.calendars !== undefined){
            let data_local = props.data
            setTotalData(data_local);
            setFilteredData(data_local);
            setCalendars(props.calendars);
            handleCheckboxChange(null)
        }
    },[])

    let view;
    if (monthView) {
        view = <Month actualDay={actualDay} data={filteredData} clickHandler={props.clickHandler} calendars={calendars}/>;
    }else{
        view = <WeekView actualDay={actualDay} data={filteredData} clickHandler={props.clickHandler} calendars={calendars}/>;
    }

    let weekBtn = props.week === true?<button id='week-btn' className={monthView === false?'cal-btn cal-btn-active':'cal-btn'} onClick={ () => setMonthView(false)}>Week</button>:'';
    let monthBtn = props.month === true?<button id='month-btn' className={monthView === true?'cal-btn cal-btn-active':'cal-btn'} onClick={ () => setMonthView(true)}>Month</button>:'';
    
    const getData=(url,setX)=>{
        fetch(url).then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setX(myJson)
          });
      }

    
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
        
        console.log(selectedItems)
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
                        <h1>{monthName}<span> {yearText}</span></h1>
                    </div>
                    <div className='cal-btn-group'>
                        {weekBtn}
                        {monthBtn}
                    </div>
                    <div className='cal-btn-group'>
                        <button className='cal-btn cal-btn-arrow' onClick={handlePrevBtn}><i className='arrow arrow-left'></i></button>
                        <button className='cal-btn cal-btn-today' onClick={ () => setActualDay(new Date())}>Today</button>
                        <button className='cal-btn cal-btn-arrow' onClick={handleNextBtn}><i className='arrow arrow-right'></i></button>
                    </div>
                </div>
                <div className='view-content'>
                    {view}
                </div>
            </div>
            <div className={props.searchBar === false?'display-none':'search-container'} >
                <Search data={filteredData} search={props.search} clickHandler={props.clickHandler} calendars={calendars}></Search>
            </div>
        </div>
    );
}

export default Calendar;