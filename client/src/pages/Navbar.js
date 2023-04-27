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

export function NavbarAdmin () {

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
            <b>Campus Connect (Admin) </b>
          </Typography>
          <Link to={"/"}>
            <Button color="inherit" style={{ color: "white" }}>
              Home
            </Button>
          </Link>
          <Link to="/UniversityDetails">
            <Button color="inherit" style={{ color: "white" }}>
              Universities
            </Button>
            </Link>
          {/* <Button color="inherit" style={{ color: "white" }}>
            Academics
          </Button> */}
          <Link to="/AboutUs">
          <Button color="inherit" style={{ color: "white" }}>
            About Us
          </Button>
          </Link>
          {(token!==null && token.length>4)  && <Link to={"/adminhome"}>
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

};


export const  Navbar =() => {
  const [isadmin, setIsadmin] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if(token !== null)
  {  
  const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/admin/isadmin", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          }
        });
        if(response.status===200){
          setIsadmin(true);
        }
        else{
          setIsadmin(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }
  }, []);

    return (
        <div>
          {isadmin ? (
            <div>
              <NavbarAdmin />
              </div>
              ) : (
                <div>
                   <NavbarNormal />   
                </div>
              )
                  }
  
        </div>
    )
};