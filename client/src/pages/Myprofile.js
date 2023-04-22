import { Link } from "react-router-dom"

export const Myprofile = () => {
    return(
        <div className="App">
            This my profile page.
            <Link to={'/editmyprofile'}><button>Edit Profile</button></Link>
        </div>
    )
}