import {useParams} from "react-router-dom"
import {useEffect} from "react"

export const ProductDetail =()=>{
    const {id}  = useParams(); 
    // useEffect=()=>{
    //     console.log("Mounted")
    // }
    return(
        <div>
            <h2>You are seeing the product details : {id}</h2>
        </div>
    )
}