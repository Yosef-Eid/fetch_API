import {React, useEffect, useState} from 'react';
import "./Fetch.css";
const Fetch = () => {

let [data, setData] = useState('')
let [index, setIndex] = useState('')


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => {
            let getData = data.map((item, index) =>(
                <ul className='data shadow-none p-3 mb-5 bg-light rounded alert alert-primary'>
                    <li key={index}>{item.id}</li>
                    <li key={index}>{item.username}</li>
                    <li key={index}>{item.name}</li>
                    <a href=''><li key={index}>{item.email}</li></a>
                    <li key={index}>{item.phone}</li>
                    <li key={index}>{item.website}</li>
                    
                </ul>

            ))
            setData(getData)
        })
        .catch(err => console.error(err))
    },[])

    return(
        <div className=" fetch container "  >{data}</div>
    )
}



export default Fetch;
