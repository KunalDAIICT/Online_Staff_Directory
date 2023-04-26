import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Loginpg } from "./pages/Loginpg";
import { Notfound } from "./pages/Notfound";
import { Signup } from "./pages/Signup";
import { Myprofile } from "./pages/Myprofile";
import { EditMyProfile } from "./pages/EditMyProfile";
import { UniversityDetails } from "./pages/Landing";
import { ResetPassword } from "./pages/resetpassword";
import { SendResetLink } from "./pages/SendResetLink";
import { useNavigate } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import { Verify } from "./pages/verify";
import UniversityForm from "./pages/addUniversity";
import { FacultyProfile } from "./pages/FacultyProfile";
import AboutUs from './pages/AboutUs';
import Footer from './pages/footer';
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
        {/* {token.length>4 && token} */}
        <Routes>
          <Route path="/" element={<UniversityDetails />}></Route>
          <Route path="/loginpage" element={<Loginpg />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<Notfound />}></Route>
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/editmyprofile" element={<EditMyProfile />} />
          <Route path="/UniversityDetails" element={<UniversityDetails />} />
          <Route path="/Faculties" element={<FacultyDetails />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adduniversity" element={<UniversityForm />} />
          {/* <Route path="/resetpassword" element={<ResetPassword />} /> */}
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/sendresetlink" element={< SendResetLink />} />
          <Route path="/verify-email/:token" element={<Verify />} />
          <Route path="/FacultyProfile" element={<FacultyProfile/>}></Route>
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      {/* </Router> */}
      <Footer />
    </div>
  );
}

export default App;
