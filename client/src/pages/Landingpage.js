import React, { useState } from 'react';
import './Landingpage.css'; // import CSS styles
import { AppBar, Toolbar, Stack, Typography, Fab, Button, IconButton, Box, Container, InputAdornment, TextField} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { MuiDrawer } from './filter.js';

// university data
const universitydata = [
  {
    id: 1,
    name: 'Dhirubhai Ambani Institute of Information and Communication Technology',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Dhirubhai_Ambani_Institute_of_Information_and_Communication_Technology_logo.png/220px-Dhirubhai_Ambani_Institute_of_Information_and_Communication_Technology_logo.png',
  },
  {
    id: 2,
    name: 'Indian Institute of Technology Bombay',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png',
  },
  {
    id: 3,
    name: 'Indian Institute of Technology Delhi',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png',
  },
  {
    id: 4,
    name: 'Nirma University',
    imageUrl: 'https://i.pinimg.com/736x/7d/d5/a5/7dd5a5adf1e9a8bdf13a58f246b37097.jpg',
  },
  {
    id: 5,
    name: 'Pandit Deendayal Petroleum University',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Pandit_Deendayal_Energy_University_logo.png',
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

// university card component
const UniversityCard = ({ university }) => (

  <Box className="university-card">
    <div className="university-image-container">
      <img className="university-image" src={university.imageUrl} alt={university.name} />
    </div>
    <div className="university-details">
      <h3 className="university-name">{university.name}</h3>
    </div>
  </Box>
);

// University details page component
const UniversityDetails = () => (
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
              Online university-Staff Directory
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
      <Stack marginLeft={50} direction="row" alignItems="center" spacing={5}>
        <item>
          <SearchBar />
        </item>
        <item>
        {/* () => alert('Hello') */}
          <Fab size="small" color="secondary" aria-label="add" onClick={() => MuiDrawer()}>
            <FilterListIcon />
          </Fab>
        </item>
      </Stack>
      <div className="university-details-page">
        <div className="university-cards-box">
          <div className="university-cards-container">
            {universitydata.map(university => (
              <UniversityCard key={university.id} university={university} />
            ))}
          </div>
        </div>
      </div>
    </div>
);

export default UniversityDetails;
