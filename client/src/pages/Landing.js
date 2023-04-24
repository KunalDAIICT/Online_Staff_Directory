import { Link } from "react-router-dom"
import React, { useState } from 'react';
import '../landing.css';  // path for css file
import { AppBar, Toolbar, Stack, Typography, Fab, Button, IconButton, Box, Container, InputAdornment, TextField, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// aa logos
import logo from '../data/Logo.png'
import nirma_logo from '../data/nirma_logo.png'
import iitb_logo from '../data/iitb_logo.png'
import au_logo from '../data/au_logo.png'
import pdeu_logo from '../data/pdeu_logo.png'

const universityData = [
    {
        id: 1,
        university_name: 'Dhirubhai Ambani Institute of Information and Communication Technology',
        imageUrl: logo,
    },
    {
        id: 2,
        university_name: 'Nirma University',
        imageUrl: nirma_logo,
    },
    {
        id: 3,
        university_name: 'Indian Institute of Technology Bombay',
        imageUrl: iitb_logo,
    },
    {
        id: 4,
        university_name: 'Ahmedabad University',
        imageUrl: au_logo,
    },
    {
        id: 5,
        university_name: 'Pandit Deendayal Energy University',
        imageUrl: pdeu_logo,
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

const UniversityCard = ({ university }) => (
    <>
        <Stack className="university-card" direction="row" marginLeft={30} marginTop={10} alignItems={'center'}>
            <Box display='flex' height='100%' width='25%' alignItems='center' justifyContent='center' justifyItems='center'>
                <img className="university-image" src={university.imageUrl} alt={'logo'} />
            </Box>
            <Divider orientation="vertical" />
            <Box display='flex' width="65%" alignItems='center' justifyContent='center' marginRight='5%' marginLeft='%' overflow='hidden'>
                <Typography fontSize={20} textAlign='center'>
                    {university.university_name}
                </Typography>
            </Box>
            <Box display='flex' height='100%' width="10%" alignItems='center' justifyContent='center'>
                <Fab color='info' size='medium'>
                    <ArrowForwardIosIcon />
                </Fab>
            </Box>
        </Stack>
    </>
)



// export const Landing = () => {

//     const logout = () => {
//         localStorage.setItem("token","null");
//     }
//     return(
//         <div className="App">
//             This is the landing page
//             <br />
//             <Link to={'/loginpage'}><button>Login</button></Link>
//             OR 
//             <Link to={'/signup'}><button>Sign Up</button></Link>

//             <br />
//             <Link to={'/university'}><button>Go to University</button></Link>


//             <br />

//             {/* {localStorage.getItem("token")}; */}

//             <button onClick={logout}>Logout</button>
//         </div>
//     )
// }

export const Landing = () => {
    const logout = () => {
        localStorage.setItem("token","null");
    }
    
    return (
        <>
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
                            <b>Online Faculty-Staff Directory</b>
                        </Typography>
                        <Button color="inherit">Details</Button>
                        <Button color="inherit">Academics</Button>
                        <Button color="inherit">Profile</Button>
                        <Button color="inherit">About Us</Button>
                        <Link to={'/loginpage'}><Button color="inherit" variant='outlined' sx={{ mr: 1 }}>Sign In</Button></Link>
                        <Link to={'/signup'}><Button color="warning" variant='contained'>Sign Up</Button></Link>
                        
                    </Toolbar>
                </AppBar>
            </Box>
            <Stack marginLeft={65} direction="row" alignItems="center" spacing={5}>
                <item>
                    <SearchBar />
                </item>
                {/* <item>
                    <Fab size="small" color="secondary" aria-label="add" onClick={() => alert('Hello')}>
                        <FilterListIcon />
                    </Fab>
                </item> */}
            </Stack>
            {universityData.map(university => (
                <UniversityCard key={university.id} university={university} />
            ))}
        </>
    );
};

export default Landing;
