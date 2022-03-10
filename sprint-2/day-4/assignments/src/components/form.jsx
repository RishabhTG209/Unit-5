import {useState} from 'react'
import axios from 'axios'

export const Forms =()=>{
    const [formData, setFormData] = useState({
        name :"",
        age:"",
        address:"",
        department:"",
        salary:"",
        married:"",
        single:"",
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
        axios.post("http://localhost:3125/employee",formData).then(()=>{
            alert("Employee Successfully registered");
            setFormData({
                name :"",
                age:"",
                address:"",
                department:"",
                salary:"",
                married:"",
                single:"",
            });
        });
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <h3>Signup</h3>
            <input  
                id="name" 
                type="text" 
                value={formData.name}
                onChange={handleChange} 
                placeholder="Enter Name">
            </input>
            <input 
                id="age"
                type="number" 
                value={formData.age}
                onChange={handleChange} 
                placeholder="Enter Age">
            </input>
            <input 
                id="address"
                type="text" 
                value={formData.address}
                onChange={handleChange} 
                placeholder="Enter Address">
            </input>
            <select 
                id="department"
                type="text"
                onChange={handleChange}> 
                <option>-----</option>
                <option value={formData.department}>Finance</option>
                <option value={formData.department}>Management</option>
                <option value={formData.department}>Technical</option>
                <option value={formData.department}>HR</option>
            </select>
            <input 
                id="salary"
                type="number" 
                value={formData.salary}
                onChange={handleChange} 
                placeholder="Enter Salary">
            </input>

            <input 
                id="martial_status"
                type="checkbox" 
                value={formData.married}
                onChange={handleChange}>
            </input>
            <label>Married</label>

            <input 
                id="martial_status"
                type="checkbox"
                value={formData.single}
                onChange={handleChange}>
            </input>
            <label>Single</label>

            <input type="submit" value="Submit data"></input>
        </form>
    )
}