import {useNavigate} from "react-router-dom"

export const Login=()=>{
    const navigate = useNavigate();

    return(
        <div>
            <input type="text" placeholder="UserName"></input>
            <input type="password" placeholder="Password"></input>
            <button onClick={()=>{
                navigate("/")
            }}>Login</button>
        </div>
    )
}