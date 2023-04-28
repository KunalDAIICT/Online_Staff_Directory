
import React, { useState , useEffect } from 'react';
import '../faculty.css'; // import CSS styles
import { AppBar, Toolbar, Stack, Typography, Fab, Button, IconButton, Box, Container, InputAdornment, TextField, Drawer } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';


// faculty data



  export function SearchBar({ faculties, setsearchFaculty }) {
    const [searchTerm, setSearchTerm] = useState("");
   
    return (
      <Container >
        <TextField
          id="search"
          type="search"
          label="Search By Specialization"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            console.log(e.target.value);
  
            const filtered = faculties.filter((faculty) => {
              return faculty.specialization.toLowerCase().includes(e.target.value.toLowerCase());
            });
  
  
            if(e.target.value !== ""){            
              setsearchFaculty(filtered);
              console.log(faculties);
            }else{
              setsearchFaculty(faculties);
  
            }
          }}
          sx={{ width: 500 }}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Container>
    );
  }

// faculty card component
export function FacultyCard ({ faculty }) {  
  let navigate = useNavigate();


  const handleClick = () => () => {
    console.log("clicked");
    navigate("/FacultyProfile",
    {
      state: {faculty: faculty}
    });
  };
 
  return (
    
  <Box className="faculty-card" onClick={handleClick()}>
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
        {/* <Button }>View Profile</Button> */}
    </div>
  </Box>

  );
};

// faculty details page component
const FacultyDetails = () => {
  const [uni, setuni] = useState("");
  const [faculties, setfaculties] = useState([]);
  const [searchFaculty , setsearchFaculty] = useState([]);
  const [open, setOpen] = React.useState(false);

  const {state} = useLocation();

  // const queryParameters = new URLSearchParams(window.location.search);
  
  useEffect(() => {    
    // setuni(queryParameters.get("id"));
    const fetchData = async () => {

      try {
        const univ = {
          university: state.name
        };
        // console.log(univ);
        const vari = JSON.stringify(univ);
        const data =  {
          method: "POST",
          body: vari,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        };
        console.log(data);
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/filter/faculties`,data);

        const json = await response.json();
        console.log("json is", json);
        setfaculties(json);
        setsearchFaculty(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <div>
      
      <div className="faculty-details-page">
        <SearchBar  faculties={faculties} setsearchFaculty={setsearchFaculty}/>
        <div className="faculty-cards-box">
          <div className="faculty-cards-container">
          {searchFaculty.length > 0 ? (
              searchFaculty.map((faculty) => (
                <FacultyCard faculty={faculty} key={faculty._id} />
              ))
            ) : (
              <h1>No faculties found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;
