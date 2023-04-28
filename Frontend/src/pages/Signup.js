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
import { useNavigate } from "react-router-dom";
import '../App.css';
import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';

const theme = createTheme();

export const Signup = () => {
const [mobile, setMobile] = useState("");
const [isError, setIsError] = useState(false);
const [confirmpassword, setConfirmPassword] = useState("");
const [password, setPassword] = useState("");
const [matchPassword, setMatchPassword] = useState(true);
const [isvalid, setIsvalid] = useState(true);
const [isOk, setIsOk] = useState(true);
// To display universities in dropdown

  const [allUni, setAllUni] = useState([]);
  // const [ErrorMessages, setErrorMessages] = useState([]);

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
  }, [isOk]);

  let navigate=useNavigate();
  const handleUserSignup = async (userData) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(response);
  
    if(response.status === 200){
      alert("Registered successfully, Verify your email to login!");
      navigate('/loginpage');
    }
    else if(response.status === 400){
      alert("Email address already in use! Try again!");
    }
    else{
      alert("An unknown error occured please try again!");
    }
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

    // // generate regexp for email that should have username atthe rate and domain name and domain name should have atleast one dot
    // var email=  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;


  }


  const handleSubmit = (event) => {


    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if(matchPassword !== true || isError || isvalid !== true)
    {
      alert("Please enter valid details!");
      setIsOk(!isOk);
    }
    else
    {
    var a="0";
    if(data.get('role') === "faculty"){
      a="1";
    }
    console.log(a);
    var userData={};
    if(a===0){
    userData = {...userData,
      "name" : data.get('firstName') + " " + data.get('lastName'),
      "userEmail": data.get('email'),
      "password": data.get('password'),
      "confirmpassword" : data.get('confirm password'),
      "mobile_number": data.get('mobile'),
      "university": data.get('university'),
      "role": a,
      "Image":"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    };
    }
    else{
      userData={...userData,
        "name" : data.get('firstName') + " " + data.get('lastName'),
        "userEmail": data.get('email'),
        "password": data.get('password'),
        "confirmpassword" : data.get('confirm password'),
        "mobile_number": data.get('mobile'),
        "university": data.get('university'),
        "role": a,
        "specialization": "Not Known",
        "experience": "0",
        "projects": [],
        "Awards_and_Honors": [],
        "Industrial_experience": [],
        "Publications": [],
        "Image":"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        "__v": {"$numberInt":"0"}
      };
    }
    console.log(userData);
    handleUserSignup(userData);
  }
  };
  

  return (
    <ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="xs" sx={{}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: '5%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 8,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required = {true}
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
                  required = {true}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type='email'
                />
              </Grid>
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
              <Grid item xs={12}>
                <TextField
                  required = {true}
                  fullWidth
                  name="mobile"
                  label="Mobile"
                  type="tel"
                  id="mobile"
                  autoComplete="new-mobile"
                  error={isError}
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                    if (e.target.value[0] === "0" || e.target.value.length !== 10) {
                      setIsError(true);
                    }
                    else
                    {
                      setIsError(false)
                    }
                  }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                    required = {true}
                    fullWidth
                    name="university"
                    label='University'
                    select

                >
                {allUni.map(university => (
                <MenuItem value={university.name}> {university.name} </MenuItem>
                  ))}
                    {/* <MenuItem value='Dhirubhai Ambani Institute of Information and Communication Technology'>Dhirubhai Ambani Institute of Information and Communication Technology</MenuItem> */}
                  
                </TextField>
              </Grid>
              <Grid item xs={12}>
              <FormControl>
                <FormLabel id="role">Role</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="role"
                    name="role"
                    required = {true}
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
                <Link to={"/loginpage"} variant="body2">
                  {<a href='/loginpage'>Already have an account? Sign in</a>}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
      
  );
}