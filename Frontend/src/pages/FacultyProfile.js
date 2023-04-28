import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Navbar } from "./Navbar";
import {useLocation} from "react-router-dom";

const theme = createTheme();

export const FacultyProfile = () => {
    const {state} = useLocation();
    const faculty = state.faculty;  


  return (
    <ThemeProvider theme={theme}>
      
      <Box
        sx={{
          marginTop: 8,
          marginLeft: "25%",
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          width: "50%",
        }}
      >

        <FormLabel>
          <h1>{faculty.name}</h1>
        </FormLabel>

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <img
            src={faculty.Image}
            alt="img"
            width="25%"
          />
          <br />
          <FormLabel id="role">
            <h3>Email</h3>
          </FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={faculty._id}
            autoFocus
            disabled
            sx={{input: {cursor: 'pointer'}}}
                to='#'
                onClick={(e) => {
                    const url = "mailto:"+faculty._id;
                window.location.href = url;
                e.preventDefault();
                }}
          />
          
          <br />
          <FormLabel id="role">
            <h3>University</h3>
          </FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={faculty.university}
            autoFocus
            disabled
          />

          <br />
          <FormLabel id="role">
            <h3>Mobile Number</h3>
          </FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={faculty.mobile_number}
            autoFocus
            disabled
          />

          {/* <br />
          <FormLabel id="role">
            <h3>Role</h3>
          </FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={role}
            autoFocus
            disabled
          /> */}

          <br />
          {/* {role === "Faculty" && ( */}
            <FormLabel id="role">
              <h3>Specialization</h3>
            </FormLabel>
          {/* )} */}
          {/* {role === "Faculty" && ( */}
            <TextField
              margin="normal"
              required
              fullWidth
              value={faculty.specialization}
              autoFocus
              disabled
            />
          {/* )} */}

          <br />
          {/* {role === "Faculty" && ( */}
            <FormLabel id="role">
              <h3>Experience</h3>
            </FormLabel>
          {/* )} */}
          {/* {role === "Faculty" && ( */}
            <TextField
              margin="normal"
              required
              fullWidth
              value={faculty.experience}
              autoFocus
              disabled
            />
          {/* )} */}

          {/* {role === "Faculty" && ( */}
            <div>
              <br />
              <br />
              <br />
            </div>
          {/* )} */}

          {/* {role === "Faculty" && ( */}
            <FormLabel id="role">
              <h3>Awards and Honours</h3>
            </FormLabel>
          {/* )} */}

          
            {faculty.Awards_and_Honors !== null &&
            faculty.Awards_and_Honors > 0 &&
            faculty.Awards_and_Honors.map((friend, index) => (
              <div key={index}>
                <TextField
                  // className={classes.textField}
                  // label={`Friend ${index + 1}`}
                  variant="outlined"
                  value={friend}
                  disabled
                />
              </div>
            ))}

          {faculty.Awards_and_Honors !== null && faculty.Awards_and_Honors.length === 0 && (
            <div>Empty</div>
          )}

          { (
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
          )}

          { (
            <FormLabel id="role">
              <h3>Industrial Experience</h3>
            </FormLabel>
          )}

          
            {faculty.Industrial_experience !== null &&
            faculty.Industrial_experience.length > 0 &&
            faculty.Industrial_experience.map((friend, index) => (
              <div key={index}>
                <TextField
                  // className={classes.textField}
                  // label={`Friend ${index + 1}`}
                  variant="outlined"
                  value={friend}
                  disabled
                />
              </div>
            ))}

          {faculty.Industrial_experience !== null && faculty.Industrial_experience.length === 0 && (
            <div>Empty</div>
          )}

          {(
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
          )}

          {(
            <FormLabel id="role">
              <h3>Publications</h3>
            </FormLabel>
          )}

        
            {faculty.Publications !== null &&
            faculty.Publications.length > 0 &&
            faculty.Publications.map((friend, index) => (
              <div key={index}>
                <TextField
                  // className={classes.textField}
                  // label={`Friend ${index + 1}`}
                  variant="outlined"
                  value={friend}
                  disabled
                />
              </div>
            ))}

          {faculty.Publications !== null && faculty.Publications.length === 0 && (
            <div>Empty</div>
          )}


          
          { (
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
          )}

          { (
            <FormLabel id="role">
              <h3>Projects</h3>
            </FormLabel>
          )}

          
            {faculty.projects !== null &&
            faculty.projects.length > 0 &&
            faculty.projects.map((friend, index) => (
              <div key={index}>
                <TextField
                  // className={classes.textField}
                  // label={`Friend ${index + 1}`}
                  variant="outlined"
                  value={friend}
                  disabled
                />
              </div>
            ))}

          {faculty.projects !== null && faculty.projects.length === 0 && (
            <div>Empty</div>
          )}
        
        <Button fullWidth variant="contained"
            sx={{ mt: 3, mb: 2 , input: {cursor: 'pointer'}}}
            to='#'
            onClick={(e) => {
                const url = "mailto:"+faculty._id;
            window.location.href = url;
            e.preventDefault();
            }}>Email</Button>
          {/* <Button onClick={()=> console.log(awards)}>Show awards</Button> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
