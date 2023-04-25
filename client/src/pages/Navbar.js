import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    Box,
    IconButton,
  } from "@mui/material";
  import {Link, useNavigate} from "react-router-dom";


export const Navbar = () => {
    var token=localStorage.getItem("token");
    let navigate=useNavigate();
    
    const logOut = () => {
      localStorage.setItem("token","null");
      token=null;
      alert("Logged out successfully");
      navigate("/");
    }
    return (
        <Box padding={1} border sx={{flexGrow: 1}}>
        <AppBar position="static" className="Navbar">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <b>Online Faculty-Staff Directory</b>
            </Typography>
            <Link to={"/"}>
              <Button color="inherit" style={{ color: "white" }}>
                Home
              </Button>
            </Link>
            {/* <Button color="inherit" style={{ color: "white" }}>
              Academics
            </Button> */}
            <Button color="inherit" style={{ color: "white" }}>
              About Us
            </Button>
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
            {(token!==null && token.length>4)  && <Link to={"/myprofile"}>
              <Button color="inherit" variant="outlined" sx={{ mr: 1, color: "white" }}>
                My Profile
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