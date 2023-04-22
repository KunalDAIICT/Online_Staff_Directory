import React from 'react';
import './faculty.css'; // import CSS styles
import { AppBar, Toolbar, Typography, Button, Link, IconButton, Box} from '@mui/material';
import logo from "./logo.svg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import SchoolIcon from '@mui/icons-material/School';


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
    specialization: 'Mathematics',
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
          <LinkedInIcon/>
        </IconButton>
        <IconButton>
          <SchoolIcon/>
        </IconButton>
        <IconButton>
          <LinkIcon/>
        </IconButton>
      </p>
    </div>
  </Box>
);

// faculty details page component
const FacultyDetails = () => (
  <div>
    <Box sx={{ flexGrow: 1 }} padding={1} border>
            <AppBar position="static" className='Navbar'>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Online Faculty-Staff Directory
                </Typography>
                <Button color="inherit"><b>Details</b></Button>
                <Button color="inherit">Academics</Button>
                <Button color="inherit">Profile</Button>
                <Button color="inherit">About Us</Button>
                <Button color="inherit" variant='outlined' sx={{ mr: 1 }}>Sign In</Button>
                <Button color="warning" variant='contained'>Sign Up</Button>
                </Toolbar>
            </AppBar>
        </Box>
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

export default FacultyDetails;
