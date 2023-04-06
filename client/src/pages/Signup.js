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
//import MuiPhoneNumber from "material-ui-phone-number";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


const theme = createTheme();






// export const Signup = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

export const Signup = () => {
  let navigate=useNavigate();
  const handleUserSignup = async (userData) => {
    
    const response = await fetch("http://localhost:3000/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(response);
  
    if(response.status === 200){
      alert("Registered successfully, You can now login");
      navigate('/loginpage');
    }
    else if(response.status === 400){
      alert("Email address already in use! Try again!");
    }
    else{
      alert("An unknown error occured please try again!");
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
    // const userData = 
    //   {
    //     "confirmpassword": "p",
    //     "mobile_number": "07623065210",
    //     "name": "Kunal Hotwani",
    //     "password": "p",
    //     "role": "0",
    //     "university": "DAIICT",
    //     "userEmail": "kunal.hotwani1@gmail.com"
    //   };
    
    const userData = {
      "name" : data.get('firstName') + " " + data.get('lastName'),
      "userEmail": data.get('email'),
      "password": data.get('password'),
      "confirmpassword" : data.get('confirm password'),
      "mobile_number": data.get('mobile'),
      "university": data.get('university'),
      "role": a
    };
    console.log(userData);
    handleUserSignup(userData);
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm password"
                  label="Confirm Password"
                  type="password"
                  id="confirm password"
                  autoComplete="new-confirm password"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <MuiPhoneNumber
                    defaultCountry={"us"}
                    variant="outlined"
                    label="Phone Number"
                    disableAreaCodes
                /> */}
                <TextField
                  required
                  fullWidth
                  name="mobile"
                  label="Mobile"
                  type="number"
                  id="mobile"
                  autoComplete="new-mobile"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="university"
                    label='University'
                    select
                >
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>USA</MenuItem>
                    <MenuItem value='AU'>Australia</MenuItem>
                </TextField>
              </Grid>
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
