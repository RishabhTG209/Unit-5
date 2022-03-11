import logo from './logo.svg';
import './App.css';
import {useState,useRef, useEffect} from 'react'

function App() {
  const [counter,setCounter]= useState(0)
  // const [name,setName]= useState("Masai")

  // const ref = useRef("Masai")

  const ref = useRef(null)

  // let name = "Masai";
  // console.log(name)

  // ref.current = "Masai"
  // console.log("name is ",ref.current)

  const startTimer =()=>{
    ref.current=setInterval(()=>{
      setCounter((p)=>p+1);
    },500);
  }

  useEffect(()=>{
    startTimer()
  },[])
 
  return (
    <div className="App">
      <h3>Counter : {counter}</h3>
      <button onClick ={()=>{
        clearInterval(ref.current)
      }}>Stop
      </button>

      <button onClick={()=>{
        startTimer()
      }}>Start
      </button>

      <button onClick={()=>{
        clearInterval(ref.current);
        setCounter(0)
      }}>Reset
      </button>
    </div>
  );
}

export default App;




// <button onClick ={()=>{
//   name is getting store basically
//   name = "new name"
//   console.log("Name is",name)

//   ref.current = "Masai name changed";
//   console.log("name is ",ref.current)
// }}>Name
// </button>
