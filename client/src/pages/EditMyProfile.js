import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

const theme = createTheme();

export const EditMyProfile = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [univ, setUniv] = useState("");
  const [mob, setMob] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/profile", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response);
        const json = await response.json();
        console.log(json);
        setData(json);
        console.log(json.role);
        if (json.role === "0") {
          setName(json.name);
          setEmail(json._id);
          setUniv(json.university);
          setMob(json.mobile_number);
          setRole("Student");
        } else {
          setName(json.name);
          setEmail(json._id);
          setUniv(json.university);
          setMob(json.mobile_number);
          setRole("Faculty");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  let navigate = useNavigate();
  const handleUserSignup = async (userData) => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(response);
    if (response.status === 200) {
      alert("Logged in successfully");
      navigate("/");
    } else if (response.status === 401) {
      alert("Invalid Username and Password, Please try again!");
    } else {
      alert("An unknown error occured, Please try again!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    var a = "0";
    if (data.get("role") === "faculty") {
      a = "1";
    }
    console.log(a);
    const userData = {
      password: data.get("password"),
      role: a,
      userEmail: data.get("email"),
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
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          // alignItems: 'center',
          width: "50%",
        }}
      >
        <Typography component="h1" variant="h5">
          Edit Profile
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormLabel id="role">Name</FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoFocus
          />
          <br />
          <FormLabel id="role">User Email</FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoFocus
          />

          <br />
          <FormLabel id="role">University</FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={univ}
            onChange={(event) => setUniv(event.target.value)}
            autoFocus
          />

          <br />
          <FormLabel id="role">Mobile Number</FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={mob}
            onChange={(event) => setMob(event.target.value)}
            autoFocus
          />

          <br />
          <FormLabel id="role">Role</FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={role}
            autoFocus
            disabled
          />

          {role==="Faculty" && <div>Faculty details...</div>}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
