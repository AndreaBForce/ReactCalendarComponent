import './calendar.css';
import Search from './searchsection/Search.js'
function Calendar(props){
    let today = new Date();
    let dateformatted = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    return (
        <div>
        <h1>{dateformatted}</h1>
        <h2>{props.calendar}</h2>
        <table>
            {/* conterrà la vista per mese o per settimana */}
            <tr>
                <td>day 1</td>
            </tr>
        </table>

       {/*<div>
        {
        props.data && props.data.length>0 && props.data.map((item)=>(
            <div>
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
        </div>*/}
        
        <Search data={props.data}></Search>
        </div>
    );
}

export default Calendar;