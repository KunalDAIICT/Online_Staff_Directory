import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Loginpg } from "./pages/Loginpg";
import { Notfound } from "./pages/Notfound";
import { Signup } from "./pages/Signup";
import { Menu } from "./pages/Menu";
import { Universitypg } from "./pages/Universitypg";
import { UnivAbout } from "./pages/UnivAbout";
import { Myprofile } from "./pages/Myprofile";
import { EditMyProfile } from "./pages/EditMyProfile";
import { UniversityDetails } from "./pages/Landing";
import { ResetPassword } from "./pages/resetpassword";
import { SendResetLink } from "./pages/SendResetLink";
import { useNavigate } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import UniversityForm from "./pages/addUniversity";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import FacultyDetails from "./pages/faculty";

function App() {
  var token=localStorage.getItem("token");
  let navigate=useNavigate();
  
  const logOut = () => {
    localStorage.setItem("token","null");
    token=null;
    alert("Logged out successfully");
    navigate("/");
  }


  return (
    <div className="App">
      {/* <Router> */}
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
              <Button color="inherit" style={{ color: "white" }}>
                Academics
              </Button>
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
              {(token !== null && token.length>4)  && <Link to={"/myprofile"}>
                <Button color="inherit" variant="outlined" sx={{ mr: 1, color: "white" }}>
                  My Profile
                </Button>
              </Link>}
              {(token !== null && token.length>4)   &&
                <Button color="warning" variant="contained" onClick={logOut}>
                  Log out
                </Button>
              }
            </Toolbar>
          </AppBar>
        </Box>
        {/* {token.length>4 && token} */}
        <Routes>
          <Route path="/" element={<UniversityDetails />}></Route>
          <Route path="/loginpage" element={<Loginpg />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<Notfound />}></Route>
          <Route path="/university/faculties" element={<Menu />}>
          </Route>
          <Route path="/university" element={<Universitypg />} />
          <Route path="/university/about" element={<UnivAbout />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/editmyprofile" element={<EditMyProfile />} />
          <Route path="/UniversityDetails" element={<UniversityDetails />} />
          <Route path="/Faculties" element={<FacultyDetails />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adduniversity" element={<UniversityForm />} />
          {/* <Route path="/resetpassword" element={<ResetPassword />} /> */}
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/sendresetlink" element={< SendResetLink />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
