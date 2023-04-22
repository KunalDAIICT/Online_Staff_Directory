import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export const EditMyProfile = () => {


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  let navigate=useNavigate();
  const handleUserSignup = async (userData) => {
    
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(response);
    if(response.status === 200){
      alert("Logged in successfully");
      navigate('/');
    }
    else if(response.status === 401){
      alert("Invalid Username and Password, Please try again!");
    }
    else{
      alert("An unknown error occured, Please try again!");
    }
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    var a="0";
    if(data.get('role') === "faculty"){
      a="1";
    }
    console.log(a);
    const userData = 
      {
        "password": data.get('password'),
        "role": a,
        "userEmail": data.get('email')
      };
    console.log(userData);
    handleUserSignup(userData);
  };

  return (
    <ThemeProvider theme={theme}>
        <Box
          sx={{
            marginTop: 8,
            marginLeft: "25%",
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            // alignItems: 'center',
            width: "50%"
          }}
        >
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormLabel id="role">First Name</FormLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="firstname"
              autoFocus
            />
            <br />
            <FormLabel id="role">Last Name</FormLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastname"
              label="Last Name"
              type="lastname"
              id="lastname"
              autoComplete="lastname"
            />
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="role">Role</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="role"
                    name="role"
                >
                    <FormControlLabel value="student" control={<Radio />} label="Student" />
                    <FormControlLabel value="faculty" control={<Radio />} label="Faculty" />
                </RadioGroup>
                </FormControl>
              </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
    </ThemeProvider>
  );
}
