import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {get_flats_data} from "../../Redux/allflats/action"

export const FlatDetails=()=>{
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() =>{flatdetail()},[])
    const rows = useSelector((store)=>store.flats.flats)
    const flatdetail=()=>{
        dispatch(get_flats_data())
    }

    const array= rows.filter((ele)=>{
        return ele._id==id
    })
    console.log(array)
    return(
        <div>
            <p>Flat Number - {array[0].flat_no}</p>
            <p>Flat Type - {array[0].flat_type}</p>
            <p>Flat Block - {array[0].flat_block}</p>
                <table>
                    <tr>
                        <td>Names</td>
                        <td>Gender</td>
                        <td>Age</td>
                    </tr>
                    {array[0].flat_residents.map((e)=>(
                    <tr>
                        <td>{e.Name}</td>
                        <td>{e.Gender}</td>
                        <td>{e.Age}</td>
                    </tr>
                    ))}
                </table>
            
        </div>
    )
}



// <div>
//                     <p>Name: {e.Name} &nbsp; Gender:{e.Gender} &nbsp; Age: {e.Age} </p>
//                 </div>