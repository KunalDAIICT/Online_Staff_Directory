import React, { useState  , useEffect} from 'react';
// import '../css/university.css'; // import CSS styles
import '../adminUniversityDetails.css'
import { AppBar, Toolbar, Stack, Typography, Fab, Button, IconButton, Box, Container, InputAdornment, TextField, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import { useNavigate } from 'react-router-dom';



export function UniversityCard ({ university })  {
  return(
    <>
        <Stack className="university-card" direction="row" marginTop={10} alignItems={'center'}>
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
                {/* <Fab color='error' size='medium' >
                    <DeleteIcon />
                </Fab> */}
            </Box>
        </Stack>
    </>
  );
}

export function AdminUniversityDetails ()  {

    const [allUni, setAllUni] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/getUniversities`, {
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
    }, []);

    let navigate = useNavigate();

const handelClick = () => {
    navigate('/adduniversity');
  }
    return (
        <>
            <Stack marginLeft={5} direction="row" alignItems="center" spacing={30}>
                <Fab variant="extended" color="error" onClick={handelClick}>
                    <AddIcon sx={{ mr: 1 }} />
                    Add University
                </Fab>
            </Stack>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Stack>
                {allUni.map(university => (
                    <UniversityCard key={university.id} university={university} />
                ))}
              </Stack>
            </Box>
        </>
    );
};


export default AdminUniversityDetails;

