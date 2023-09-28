import { useQuery } from "react-query";
import axios from "axios";

export const RQMethod=()=>{
    const fetchEntries=()=>{
        return axios.get('https://api.publicapis.org/entries')
    }
    const {isLoading,data}=useQuery('entries',fetchEntries);

    console.log(data);
    if(isLoading){
        return <h2>Loading..</h2>
    }
    const divStyle = {
        backgroundColor: 'lightblue',
        padding: '10px',
        border: '1px solid gray',
        height: '200px',
        overflow: 'scroll'
    };
    return (
        <div style={divStyle}>
        {data?.data.entries.map((entry)=>{
            return <div>{entry.API}</div>
        })}
        </div>
    )

}