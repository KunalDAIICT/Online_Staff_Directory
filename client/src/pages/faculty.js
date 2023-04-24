import React, { useState } from 'react';
import '../faculty.css'; // import CSS styles
import { AppBar, Toolbar, Stack, Typography, Fab, Button, IconButton, Box, Container, InputAdornment, TextField, Drawer } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Navbar } from './Navbar';



// faculty data
const facultyData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    mobile: '+1 123-456-7890',
    specialization: 'Computer Science',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    mobile: '+1 234-567-8901',
    specialization: "Mathematics",
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    id: 3,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    mobile: '+1 234-567-8901',
    specialization: 'Mathematics',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    id: 4,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    mobile: '+1 234-567-8901',
    specialization: 'Mathematics',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
  {
    id: 5,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    mobile: '+1 234-567-8901',
    specialization: 'Mathematics',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
  },
];



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
      <img className="faculty-image" src={faculty.imageUrl} alt={faculty.name} />
    </div>
    <div className="faculty-details">
      <h3 className="faculty-name">{faculty.name}</h3>
      <p className="faculty-email">{faculty.email}</p>
      <p className="faculty-mobile">{faculty.mobile}</p>
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
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(newOpen);
  };


  return (
    <div>
      <Navbar />
      <Stack marginLeft={50} direction="row" alignItems="center" spacing={5}>
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
      </Stack>
      <div className="faculty-details-page">
        <div className="faculty-cards-box">
          <div className="faculty-cards-container">
            {facultyData.map(faculty => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default FacultyDetails;
