import { Link } from "react-router-dom"

export const Landing = () => {
    return(
        <div className="App">
            This is the landing page
            <br />
            <Link to={'/loginpage'}><button>Login</button></Link>
            OR 
            <Link to={'/signup'}><button>Sign Up</button></Link>
        </div>
    )
}