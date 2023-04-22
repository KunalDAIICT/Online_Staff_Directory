import { Link } from "react-router-dom"

export const UnivAbout = () => {
    return(
        <div className="App">
            This is the home page of a university
            <br />
            <Link to={'/university/faculties'}><button>Faculties</button></Link>
            OR 
            <Link to={'/university/about'}><button>About</button></Link>

            <br />
            Include these in a navigation bar (Can use navbar function in react)

            <br />

            This is the about page
        </div>
    )
}