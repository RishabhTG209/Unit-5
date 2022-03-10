import {useState} from 'react'
import axios from 'axios'

export const Forms =()=>{
    const [formData, setFormData] = useState({
        username :"",
        age:"",
        email:"",
    });

    const handleChange =(e)=>{
        // console.log(e.target)
        // console.log(e.target.id,e.target.value)
        // console.log(e.target.type,e.target.placeholder)
        const {id,value} =e.target;
        setFormData({
            ...formData,
            [id]:value,
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        axios.post("http://localhost:3125/users",formData).then(()=>{
            alert("user Successfully registered");
            setFormData({
                username :"",
                age:"",
                email:"",
            });
        });
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <h3>Signup</h3>
            <input  
                id="username" 
                type="text" 
                value={formData.username}
                onChange={handleChange} 
                placeholder="Enter Username">
            </input>
            <input 
                id="age"
                type="number" 
                value={formData.age}
                onChange={handleChange} 
                placeholder="Enter Age">
            </input>
            <input 
                id="email"
                type="text" 
                value={formData.email}
                onChange={handleChange} 
                placeholder="Enter Email">
            </input>

            <input type="submit" value="Submit data"></input>
        </form>
    )
}