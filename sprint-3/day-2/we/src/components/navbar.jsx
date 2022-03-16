import {Link} from 'react-router-dom'

export const Navbar = ()=>{
    return(
        <nav
            style={{
                display: "flex",
                justifyContent: "space-evenly",
            }}>
            <div
                style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap:"10px",
                }}
            >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">User List</Link>
                <Link to="/users">Login</Link>

            </div>
        </nav>
    )
}