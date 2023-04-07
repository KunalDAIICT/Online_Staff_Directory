import { Link } from "react-router-dom"
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export const LandingPage = () => {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Box boxShadow={3} p={4} borderRadius={16}>
          <Typography variant="h4" align="center" gutterBottom>
            Online Faculty Staff Directory
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button variant="contained" color="primary">
              Sign up
            </Button>
            <Box mx={1} />
            <Button variant="contained" color="secondary">
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
  
export default LandingPage;
