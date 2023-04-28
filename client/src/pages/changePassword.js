import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from "react-router-dom";
import '../App.css';
import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import  Footer  from './footer';

const theme = createTheme();

export const ChangePassword = () => {

const token = localStorage.getItem('token');
const [confirmpassword, setConfirmPassword] = useState("");
const [password, setPassword] = useState("");
const [matchPassword, setMatchPassword] = useState(true);
const [isvalid, setIsvalid] = useState(true);
const [isOk, setIsOk] = useState(true);


  let navigate=useNavigate();
  const handleUserSignup = async (userData) => {
    const response = await fetch('http://localhost:3000/resetpassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({newpassword: password}),
        })
        .then((response) => {
            if (response.status === 200) {
                alert('Password reset successfully');
                navigate('/myprofile');
            } else {
                alert('Password reset failed');
            }
        });
  };

  const handleIsvalid=(password)=>{
    
    // generate regexp for password that should have atleat one digit one lowercase one uppercase and one special character and length should be 6-20
    var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/;
  
    if(password.match(passw))
    {
      setIsvalid(true);
    }
    else
    {
      setIsvalid(false);
    }

  }


  const handleSubmit = (event) => {


    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if(matchPassword !== true || isvalid !== true)
    {
      alert("Please enter valid details!");
      setIsOk(!isOk);
    }
    else
    {
    handleUserSignup();
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container component="main" maxWidth="xs" sx={{}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: '24%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '49%',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Password
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required = {true}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    
                    if(e.target.value !== confirmpassword)
                    {
                      setMatchPassword(false);

                    }
                    else
                    {
                      setMatchPassword(true);
                    }

                    handleIsvalid(e.target.value);
                  }}

                  error={!isvalid}
                  helperText={!isvalid ? "Password should contain atleast one digit, one lowercase, one uppercase, one special character and length should be minimum 8" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required = {true}
                  fullWidth
                  name="confirm password"
                  label="Confirm Password"
                  type="password"
                  id="confirm password"
                  autoComplete="new-confirm password"
                  value={confirmpassword}
                  onChange={(ev) => {
                    setConfirmPassword(ev.target.value);
                    if (ev.target.value !== password) {
                      setMatchPassword(false);
                    }
                    else
                    {
                      setMatchPassword(true)
                    }
                   
                  }}
                  error={!matchPassword}
                  helperText={!matchPassword ? "Password does not match" : ""}
                  
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Password
            </Button>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
      
  );
}