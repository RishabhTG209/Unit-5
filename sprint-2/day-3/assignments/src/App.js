import logo from './logo.svg';
import './App.css';
import { Timer } from './components/Timer'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
        <Timer startTimee={0} endTime={10}/>
    </div>
  );
}

export default App;
