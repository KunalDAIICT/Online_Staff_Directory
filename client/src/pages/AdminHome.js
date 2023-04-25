import React, { useEffect, useState } from "react";
import "../admin_home.css"; // import CSS styles
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Stack,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  InputAdornment,
  TextField,
  Drawer,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import SchoolIcon from "@mui/icons-material/School";
import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";
import { AdminUniversityDetails } from "./adminUniversityDetails.js";

// This page will show the data of the approved faculty members to the admin. The admin can delete the faculty members from this page.

// faculty data





export function FacultyCardApproved  ({ faculty }) {


  const handleDelete = (id) => async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/admin/deleteFaculty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ email: id }),
      });
      console.log(response);
      const json = await response.json();
      console.log(json);
      if (json.success) {
        alert("Faculty Deleted successfully");
        window.location.reload();
      } else {
        alert("Faculty Deleted failed");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

return (
  <Box className="faculty-card">
    <div className="faculty-image-container">
      <img className="faculty-image" src={faculty.Image} alt={faculty.name} />
    </div>
    <div className="faculty-details">
      <h3 className="faculty-name">{faculty.name}</h3>
      <p className="faculty-email">{faculty._id}</p>
      <p className="faculty-mobile">{faculty.mobile_number}</p>
      <p className="faculty-specialization">{faculty.specialization}</p>
      <p>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <SchoolIcon />
        </IconButton>
        <IconButton>
          <LinkIcon />
        </IconButton>
      </p>
      <p>
        <Button variant="contained" color="error" onClick={handleDelete(faculty._id)}>
          Delete
        </Button>
      </p>
    </div>
  </Box>
);
};



// faculty card component
export function FacultyCardNotApproved ({ faculty }) {

  const handleApprove = (id) => async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/admin/approveFaculty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ email: id }),
      });
      console.log(response);
      const json = await response.json();
      console.log(json);
      if (json.success) {
        alert("Faculty approved successfully");
        window.location.reload();
      } else {
        alert("Faculty approval failed");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }

    
  };

  
  const handleDelete = (id) => async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/admin/deleteFaculty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ email: id }),
      });
      console.log(response);
      const json = await response.json();
      console.log(json);
      if (json.success) {
        alert("Faculty Deleted successfully");
        window.location.reload();
      } else {
        alert("Faculty Deleted failed");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (

  <Box className="faculty-card">
    <div className="faculty-image-container">
      <img className="faculty-image" src={faculty.Image} alt={faculty.name} />
    </div>
    <div className="faculty-details">
      <h3 className="faculty-name">{faculty.name}</h3>
      <p className="faculty-email">{faculty._id}</p>
      <p className="faculty-mobile">{faculty.mobile_number}</p>
      <p className="faculty-specialization">{faculty.specialization}</p>
      <p>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <SchoolIcon />
        </IconButton>
        <IconButton>
          <LinkIcon />
        </IconButton>
      </p>
      <Stack direction="row" spacing={1}>
        <Button variant="contained" color="success" startIcon={<DoneIcon />} onClick={handleApprove(faculty._id)}>
          Approve
        </Button>
        <Button variant="contained" color="error" startIcon={<ClearIcon />} onClick={handleDelete(faculty._id)}>
          Delete
        </Button>
      </Stack>
    </div>
  </Box>
  );

};

// faculty details page component
const FacultyDetails = (isapproved, allfaculties) => {
  // const checkapproved = isapproved;
  return (
    <div>
      <div className="faculty-details-page">
        <div className="faculty-cards-box">
          <div className="faculty-cards-container">
            {isapproved
              ? allfaculties
                  .filter((faculty) => {
                    return faculty.isApproved === true;
                  })
                  .map((faculty) => (
                    <FacultyCardApproved key={faculty.id} faculty={faculty} />
                  ))
              : allfaculties
                  .filter((faculty) => {
                    return (faculty.isApproved !== true);
                  })
                  .map((faculty) => (
                    <FacultyCardNotApproved
                      key={faculty.id}
                      faculty={faculty}
                    />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LabTabs() {
  const [value, setValue] = React.useState("1");
  const [allfaculties, setAllfaculties] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/allfaculties", {
        method: "GET",
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response);
      const json = await response.json();
      setAllfaculties(json);
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [allfaculties]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var token=localStorage.getItem("token");
  let navigate=useNavigate();
  
  const logOut = (token) => {
    localStorage.setItem("token","null");
    token=null;
    alert("Logged out successfully");
    navigate("/");
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Box padding={1} border sx={{ flexGrow: 1 }}>
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
            <Button color="warning" variant="contained" onClick={logOut}>
              Log out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Approved Faculties" value="1" />
            <Tab label="Pending Approvals" value="2" />
            <Tab label="Universities" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{FacultyDetails(true, allfaculties)}</TabPanel>
        <TabPanel value="2">{FacultyDetails(false, allfaculties)}</TabPanel>
        <TabPanel value="3">{AdminUniversityDetails()}</TabPanel>
      </TabContext>
    </Box>
  );
}