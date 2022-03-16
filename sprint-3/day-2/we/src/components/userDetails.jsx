import {useParams, Navigate} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios";

export const UserDetails =()=>{
    const {userid} = useParams();
    const [user,setUser] = useState([]);

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${userid}`);
    },[])

    if(true){
        return <Navigate to = {"/login"}/>
    }

    return(
        <div>
            <h2>user of id : {userid}</h2>
        </div>
    )
}