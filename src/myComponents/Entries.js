import { useState, useEffect } from 'react'
import axios from 'axios'

export const Entries = () => {
    const [isLoading, setIsloading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://api.publicapis.org/entries')
            .then((res) => {
                    console.log(res);
                    setData(res.data.entries);
                    setIsloading(false);
               
            }).catch(error=>{
                if (error.response) {
                    // The request was made and the server responded with a status code
                    console.log('Status Code:', error.response.status);
                  } else if (error.request) {
                    // The request was made but no response was received
                    console.log('No response received');
                  } else {
                    // Something else happened in making the request
                    console.log('Error:', error.message);
                  }
            });

    }, []);
    if (isLoading) {
        return (<h2>Loading...</h2>)
    }
    const divStyle = {
        backgroundColor: 'lightblue',
        padding: '10px',
        border: '1px solid gray',
        height: '200px',
        overflow: 'scroll'
    };
    return (
        <>
            <h3>Entries</h3>
            <div style={divStyle}>
                {data.map((entry) => {
                    return <div>{entry.API}</div>
                })}
            </div>
        </>

    )
}
