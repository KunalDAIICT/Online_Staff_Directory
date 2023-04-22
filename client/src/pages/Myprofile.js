import { Link } from "react-router-dom";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link2 from "@mui/material/Link";
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
import { Paper } from "@material-ui/core";
import { useEffect, useState } from 'react';

const theme = createTheme();


export const Myprofile = () => {
  const token = localStorage.getItem("token");

  // var data=null;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/profile", {
            method: "POST",
            headers: {
              "Authorization": "Bearer "+token,
            },
          });
          console.log(response);
        const json = await response.json();
        console.log(json);
        setData(json);
        // console.log(data.name);

        data=json;
        console.log(data.name);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 



  return (
    <div className="App">
      {token === "null" && <div>You have not logged in</div>}
      {token !== "null" && (
        <ThemeProvider theme={theme}>
          <Container component="main">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 2,
                marginLeft: "20%",
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                // alignItems: 'center',
                width: "60%",
              }}
            >
              <Typography component="h1" variant="h5">
                My Profile
              </Typography>
              <Box component="form" sx={{ mt: 1}}>
                <img src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000" alt="img" width="25%"/>
                <br />

                <Typography variant="h5" align="center">
                  Name
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {data!==null && <div>{data.name}</div>}
                </Typography>

                <br />

                <Typography variant="h5" align="center">
                  User Email
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {data!==null && <div>{data._id}</div>}
                </Typography>

                <br />

                <Typography variant="h5" align="center">
                  University
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {data!==null && <div>{data.university}</div>}
                </Typography>

                <br />

                <Typography variant="h5" align="center">
                  Role
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {data!==null && <div>{data.role==="0" && <div>Student</div>}{data.role==="1" && <div>Faculty</div>}</div>}
                </Typography>



                <Link to={"/editmyprofile"}>
                  <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Edit Profile
                  </Button>
                </Link>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </div>
  );
};
