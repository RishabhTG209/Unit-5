import {Route, Routes} from 'react-router'
import {Home} from "../components/Hompage/Homepage"
import {AddCity} from "../components/AddCity/addCity"
import {AddCountry} from "../components/AddCountry/addCountry"
import {Navbar} from "../components/Navbar/Navbar"

export const AllRoutes =()=>{
    return (
        <>
            <Navbar/>
            <Routes>
                <Route exact path = "/" element = {<Home/>}/>
                <Route exact path = "/add-country" element = {<AddCountry/>}/>
                <Route exact path = "/add-city" element = {<AddCity/>}/>
            </Routes>
        </>
    )
};