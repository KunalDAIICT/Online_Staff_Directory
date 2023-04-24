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


// faculty data




export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
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
const FacultyCard = ({ faculty }) => (

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
    </div>
  </Box>
);


// faculty details page component
const FacultyDetails = () => {
  
  const [faculties, setfaculties] = useState([]);
  const [open, setOpen] = React.useState(false);
  const queryParameters = new URLSearchParams(window.location.search);
  const [uni, setuni] = useState("");
// console.log("Uni ", uni);

    useEffect(() => {    
      setuni(queryParameters.get("id"));
        const univ = {
       university: uni,
}
      console.log(univ);
 
        const fetchData = async () => {
          try {
            
           
            const response = await fetch("http://localhost:3000/filter/faculties", {
              method: "POST",
              body: JSON.stringify(univ),
            });
            console.log(response);
            const json = await response.json();
            setfaculties(json);
            console.log(faculties);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
    }, []);

 console.log(faculties);

  // const toggleDrawer = (newOpen) => (event) => {
  //   if (
  //     event &&
  //     event.type === 'keydown' &&
  //     (event.key === 'Tab' || event.key === 'Shift')
  //   ) {
  //     return;
  //   }
  //   setOpen(newOpen);
  // };


  return (
    <div>
      {/* <Stack marginLeft={50} direction="row" alignItems="center" spacing={5}>
        <item>
          <SearchBar />
        </item>
        <item>
          <Fab size="small" color="secondary" aria-label="add" onClick={toggleDrawer(true)}>
            <FilterListIcon />
          </Fab>
          <SwipeableDrawer
            anchor='left'
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >

            Hello world

          </SwipeableDrawer>
        </item>
      </Stack> */}

      <div className="faculty-details-page">
        <div className="faculty-cards-box">
          <div className="faculty-cards-container">
            {faculties.map(faculty => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default FacultyDetails;
