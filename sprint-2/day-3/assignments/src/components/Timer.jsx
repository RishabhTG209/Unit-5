import { useEffect, useState } from "react"

export const Timer = (props)=>{
    
    let startTimee = props.startTimee
    let endTime = props.endTime
    let [count,setCount] = useState(startTimee)

 useEffect(()=>{
   let id =  setInterval(()=>{
       console.log(count)
        setCount((prev)=>{
            if(prev == endTime){
                clearInterval(id)
                return endTime
            }
            return prev+1
        })
    },1000)
    
    return ()=>{
        clearInterval(id)
        console.log("cleaning function")
    }
 },[])

   


    return (
        <>
        <h1>Timer : {count}</h1>
        </>
    )
}