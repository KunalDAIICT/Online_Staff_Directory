import { Link } from "react-router-dom"
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export const Landing = () => {
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
        </div>
    )
}