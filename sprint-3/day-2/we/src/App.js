import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'

import {Hello} from './components/hello'
import {About} from './components/about'
import {Navbar} from './components/navbar'
import {ProductDetail} from './components/productDetail'
import {UserDetails} from './components/userDetails'
import {Users} from './components/users'
import {Login} from './components/login'

function App() {
const [count,setCounter] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>  
        <Route path = {"/"} element={<Hello/>}/>
        <Route path = {"/about"} element={<About/>}/>
        <Route path = {"/users"} element={<Users/>}/>
        <Route path = {"/users/:userid"} element={<UserDetails/>}/>
        <Route path = {"/login"} element={<Login/>}/>
        <Route path = {"/product/:id"} element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
