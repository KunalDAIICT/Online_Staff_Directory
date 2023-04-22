import { Link } from "react-router-dom"
import React from 'react';



export const Landing = () => {

    const logout = () => {
        localStorage.setItem("token","null");
    }
    return(
        <div className="App">
            This is the landing page
            <br />
            <Link to={'/loginpage'}><button>Login</button></Link>
            OR 
            <Link to={'/signup'}><button>Sign Up</button></Link>

            <br />
            <Link to={'/university'}><button>Go to University</button></Link>


            <br />

            {/* {localStorage.getItem("token")}; */}

            <button onClick={logout}>Logout</button>
        </div>
    )
}