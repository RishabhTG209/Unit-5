import '../App.css'
// import {TodoInput} from './todoinput'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { getDefaultNormalizer } from '@testing-library/react';

export const Groceries =()=>{
    const [text,setText] = useState("");
    const [groceries,setGroceries] = useState([]);
    const [page,setPage] = useState(1)

    useEffect(()=>{
        getData()
    },[page])

    const getData=()=>{
        axios.get(`http://localhost:3125/groceries?_limit=3&_page=${page}`).then(res=>{
            setGroceries(res.data);
        })
    }

    return(
        <div>
            <input type="text" onChange={e => setText (e.target.value) }/>
            <button onClick={()=>{
               fetch("http://localhost:3125/groceries",{
                    method:"Post",
                    body: JSON.stringify({title: text, purchase: false}),
                    headers:{
                        "content-type": "application/json"
                    },
                }).then(()=>{
                    getData();
                })
            }}>Add Grocery</button>
            {groceries.map(g =>
                <div key={g.id}>
                    {g.title}
                </div>)}
            
            <button onClick={()=>{
                if(page>0){
                    setPage(page-1)
                }
            }}>Prev</button>
            <button onClick={()=>{
                setPage(page+1)
            }}>Next</button>
        </div>
    ) 
}