import {useEffect,useState} from 'react'
import axios from 'axios'

export const AddCity=()=>{
    const [city, setCity] =useState([]);

    const [form,setForm] = useState({
        city:"",
        population:"",
        country:"",
    })

    useEffect(()=>getCountry(),[])
    let APIc = "http://localhost:8080/country";
    let APIcity = "http://localhost:8080/city";

    const getCountry=()=>{
        axios.get(`${APIc}`).then((res)=>{
            setCity([...res.data])
        })
    }

    const handleChange=(e)=>{
        const {id,value}=e.target;
        setForm({...form,[id]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`${APIcity}`,form).then(()=>{
            alert(`${form.city} has been added`);
        }).then(()=>window.location.reload());
    };

    return(
        <div>
            <h1>ADD CITY</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" id={"city"} onChange={(e)=>handleChange(e)} placeholder="Enter a City"/>
                <input type="text" id={"population"} onChange={(e)=>handleChange(e)} placeholder="Enter a Population"/>
                <select name="" id={"country"} onChange={(e)=>handleChange(e)}>
                    <option value="">Select</option>
                    {city.map((element)=>(
                        <option value={element.name}>{element.name}</option>
                    ))}
                </select>
                <input type="submit" value="Save Country"></input>
            </form>
        </div>
    )
}