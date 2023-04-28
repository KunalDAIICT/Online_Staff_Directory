import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Box,
    IconButton,
  } from "@mui/material";
  import {Link, useNavigate} from "react-router-dom";
  import { useState , useEffect } from "react";


export function NavbarNormal () {
    var token=localStorage.getItem("token");
    var role=localStorage.getItem("role");
    let navigate=useNavigate();


    const logOut = () => {
      localStorage.setItem("token","null");
      localStorage.removeItem("role");
      token=null;
      alert("Logged out successfully");
      navigate("/");
    }
    return (
        <Box padding={1} border sx={{flexGrow: 1}} display={"flex"}>
        <AppBar position="static" className="Navbar">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left", pl: '3%' }}>
              <b>Campus Connect</b>
            </Typography>
            <Link to={"/"}>
              <Button color="inherit" style={{ color: "white" }}>
                Home
              </Button>
            </Link>
            {/* <Button color="inherit" style={{ color: "white" }}>
              Academics
            </Button> */}
            <Link to="/UniversityDetails">
            <Button color="inherit" style={{ color: "white" }}>
              Universities
            </Button>
            </Link>
            <Link to="/AboutUs">
            <Button color="inherit" style={{ color: "white" }}>
              About Us
            </Button>
            </Link>
            {(token===null || token==="null")  && <Link to={"/loginpage"}>
              <Button color="inherit" variant="outlined" sx={{ mr: 1, color: "white" }}>
                Sign In
              </Button>
            </Link>}
            {(token===null || token==="null")  && <Link to={"/signup"}>
              <Button color="warning" variant="contained">
                Sign Up
              </Button>
            </Link>}
            {(role === "user")  && <Link to={"/myprofile"}>
              <Button color="inherit" variant="outlined" sx={{ mr: 1, color: "white" }}>
                My Profile
              </Button>
            </Link>}

            {(role === "admin")  && <Link to={"/adminhome"}>
              <Button color="inherit" variant="outlined" sx={{ mr: 1, color: "white" }}>
                Dashboard
              </Button>
            </Link>}
            
            {(token!==null && token.length>4)   &&
              <Button color="warning" variant="contained" onClick={logOut}>
                Log out
              </Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
      
    )
}


export const  Navbar =() => {
  
    return (
        <div>
                   <NavbarNormal />   
        </div>
    )
};
