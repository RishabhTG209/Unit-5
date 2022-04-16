import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {AddCountry} from "./components/AddCountry/addCountry"
import {AddCity} from "./components/AddCity/addCity"

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={""}/>
          <Route exact path="/add-country" element={<AddCountry/>}/>
          <Route exact path="/add-city" element={<AddCity/>}/>
      </Routes>
    </div>
  );
}

export default App;
