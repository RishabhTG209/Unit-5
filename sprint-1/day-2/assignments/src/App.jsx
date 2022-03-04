import logo from './logo.svg';
import './App.css';

import Mobile from "./components/operating"

function App() {

    const operating = "Mobile Operating System"
    const OS = ["Android","BlackBerry","iPhone","Windows Phone"]

    const manufacturers = "Mobile Manufacturers"
    const Manufacture = ["Samsung","HTC","Micromax","Apple"]


  return(
   
      <div>
        <Mobile value = {operating} data = {OS}/>
        <Mobile value = {manufacturers} data = {Manufacture}/>

      </div>
      
  )
}

export default App;
