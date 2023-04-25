import React, { useState } from 'react';
// import '../css/university.css'; // import CSS styles
import '../adminUniversityDetails.css'
import { AppBar, Toolbar, Stack, Typography, Fab, Button, IconButton, Box, Container, InputAdornment, TextField, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import logo from '../data/Logo.png'
import nirma_logo from '../data/nirma_logo.png'
import iitb_logo from '../data/iitb_logo.png'
import au_logo from '../data/au_logo.png'
import pdeu_logo from '../data/pdeu_logo.png'
import { useNavigate } from 'react-router-dom';

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

export function UniversityCard ({ university })  {



  return(
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
                <Fab color='error' size='medium' >
                    <DeleteIcon />
                </Fab>
            </Box>
        </Stack>
    </>
  );
}

export const AdminUniversityDetails = () => {
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
            {universityData.map(university => (
                <UniversityCard key={university.id} university={university} />
            ))}
        </>
    );
};

export default AdminUniversityDetails;