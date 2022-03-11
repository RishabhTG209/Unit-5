import logo from './logo.svg';
import './App.css';
import {useState,useRef, useEffect} from 'react'
import {Button} from './components/button'

function App() {
  
  const [theme,setTheme] = useState("light")

  return (
    <div className="App">
      <Button 
        theme = {theme}
        onClick={()=>{
          console.log("Sub1")
      }}>Sub 1</Button>

      
      <Button 
        theme = {theme}
        onClick={()=>{
          console.log("Add1")
      }}>Add 1</Button>


      <button onClick={()=>{
        setTheme(theme =="light" ? "dark": "light")
      }}>
      changeTheme
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
