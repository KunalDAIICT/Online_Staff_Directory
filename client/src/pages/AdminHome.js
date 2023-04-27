import React, { useEffect, useState } from "react";
import "../admin_home.css"; // import CSS styles
import {
  Tab,
  Stack,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import SchoolIcon from "@mui/icons-material/School";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";
import { AdminUniversityDetails } from "./adminUniversityDetails.js";
import { Navbar } from "../pages/Navbar";
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
  let navigate = useNavigate();
  const handleClick = () => () => {
    console.log("clicked");
    navigate("/FacultyProfile",
    {
      state: {faculty: faculty}
    });
  };

return (

  <Box className="adminfaculty-card">
    {/* <div className="adminfaculty-details"> */}
    <div className="adminfaculty-image-container">
      <img className="adminfaculty-image" src={faculty.Image} alt={faculty.name} />
    </div>
    <div className="adminfaculty-details">
      <h3 className="adminfaculty-name" onClick={handleClick()} >{faculty.name}</h3>
      <p className="adminfaculty-email">{faculty._id}</p>
      <p className="adminfaculty-mobile">{faculty.mobile_number}</p>
      <p className="adminfaculty-specialization">{faculty.specialization}</p>
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
      {/* </div> */}
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
  let navigate = useNavigate();
  const handleClick = () => () => {
    console.log("clicked");
    navigate("/FacultyProfile",
    {
      state: {faculty: faculty}
    });
  };
  return (

  <Box className="adminfaculty-card">
    <div className="adminfaculty-image-container">
      <img className="adminfaculty-image" src={faculty.Image} alt={faculty.name} />
    </div>
    <div className="adminfaculty-details">
      <h3 className="adminfaculty-name" onClick={handleClick()}>{faculty.name}</h3>
      <p className="adminfaculty-email">{faculty._id}</p>
      <p className="adminfaculty-mobile">{faculty.mobile_number}</p>
      <p className="adminfaculty-specialization">{faculty.specialization}</p>
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
      <div className="adminfaculty-details-page">
        <div className="adminfaculty-cards-box">
          <div className="adminfaculty-cards-container">
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

export function AdminTab() {
  const [value, setValue] = React.useState("1");
  const [allfaculties, setAllfaculties] = useState([]);


  useEffect(() => {
  const fetchData = async () => {
    try {
      if(localStorage.getItem("token") !== null)
      {
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
    }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [allfaculties]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
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

export default function AdminHome() {
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
  
  }, [isadmin, token]);

  return (
    <div>
      {isadmin ? (
      <div>
      <Navbar />
        <AdminTab />
        </div>
      ) : (
        <div>
          <h1>Not an admin</h1>
        </div>
      )}
    </div>
  );
}
