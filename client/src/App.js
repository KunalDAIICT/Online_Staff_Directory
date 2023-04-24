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
import { useNavigate } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
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


  return (
    <div className="App">
      {/* <Router> */}
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
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
