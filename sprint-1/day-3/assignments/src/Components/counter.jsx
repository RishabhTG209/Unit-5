import {useState} from "react"
import '../App.css';



function Counter(){

    const [counter, setCounter] = useState(0)

    const multiply = () => {
        setCounter(counter * 2)
    }
 
    const add = (value) => {
        setCounter(counter + value)
    }


    return (

        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={
                () => {
                    add(1)
                }
            }>      
                Add-1
            </button>
            <br />
            <button onClick={
                () => {
                    if(counter > 0){
                        add(-1)
                    }
                }
            }>
                Sub-1
            </button>
            <br />
            <button onClick={
                () => {
                   multiply()
                }
            }>
                Multiply-2
            </button>
        </div>        

    )
}

export default Counter