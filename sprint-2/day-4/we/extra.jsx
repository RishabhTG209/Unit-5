import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [count,setCount] = useState(0)
  const [Bg,setBg] = useState(0)
  return (
    <div className="App" 
    style = {{
      background:"#" + Bg,
    }}
    onMouseMove={(e)=>{
      console.log(e);
      setBg(
        `${Math.round(Math.random()*10)}${Math.round(Math.random()*10)}${Math.round(Math.random()*10)}`
      )
    }}>
        <button onClick={setCount}>Click Me</button>
        <input type="text"></input>
        <h2>{count}</h2>
        {/*Synthetic Event*/ }
    </div>
  );
}

export default App;
