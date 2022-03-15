import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {Button} from './components/body/button'
import {Cart} from './components/navbar/cart'

function App() {
// const [count,setCounter] = useState(0)

  return (
    <div className="App">
      <Cart/>
      <Button/>
    </div>
  );
}

export default App;
