import {Route, Routes} from 'react-router-dom'
import {Navbar} from "../components/Navbar/Navbar"
import {Home} from "../components/Homepage/Homepage"
import {SignIn} from "../components/Signin/signin"
import {SignUp} from "../components/Signup/signup"
import {FlatDetails} from "../components/Flat/flat"

export const AllRoutes = ()=>{
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/flatdetail" element={<FlatDetails/>}/>
                <Route path="/SignIn" element={<SignIn/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
            </Routes>
        </>
    )
}