import {useState} from 'react'

export const TodoInput = ({addTodo})=>{
    const [Text,setText] = useState("");
    return(
        <div>
            <input type="text" onChange={(e)=>{
                console.log("Value" , e.target.value)
                setText(e.target.value)
            }}>
            </input>
            <button onClick={()=>{
                addTodo(Text);
            }}>
            Add to Do
            </button>
        </div>
    )
}