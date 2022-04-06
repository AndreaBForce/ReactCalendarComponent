import './search.css';

function Search(props){
    return(
        // avrà una lista di week
        <div>
            <h1>SEARCH BAR SECTION</h1>
            <input placeholder="Search"/>
            {
            props.data.filter((item) => (item.description.includes('lorem') || item.title.includes('lorem'))).map((item)=>(
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
            };
        </div>
    );
}

export default Search;