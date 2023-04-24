import React, { useState } from 'react';
import '../Landing.css'; // import CSS styles
import { AppBar, Toolbar, Stack, Typography, Fab, Button, IconButton, Box, Container, InputAdornment, TextField, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
 // array of all universities



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
        <Stack className="university-card" direction="row" marginLeft={40} marginTop={10} alignItems={'center'}>
            <Box display='flex' height='100%' width='25%' alignItems='center' justifyContent='center' justifyItems='center'>
                <img className="university-image" src={university.Image} alt={'logo'} />
            </Box>
            <Divider orientation="vertical" />
            <Box display='flex' width="65%" alignItems='center' justifyContent='center' marginRight='5%' marginLeft='%' overflow='hidden'>
                <Typography fontSize={20} textAlign='center'>
                    {university.name}
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

export const UniversityDetails = () => {

    const [allUni, setAllUni] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/getUniversities", {
                method: "GET",
            });
            console.log(response);
            const json = await response.json();
            setAllUni(json);
            console.log(json);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
    
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
                        <Button color="inherit" variant='outlined' sx={{ mr: 1 }}>Sign In</Button>
                        <Button color="warning" variant='contained'>Sign Up</Button>
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
            {allUni.map(university => (
                <UniversityCard key={university.id} university={university} />
            ))}
        </>
    );
};

export default UniversityDetails;
