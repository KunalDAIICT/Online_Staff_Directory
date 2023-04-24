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

const theme = createTheme();

export const Myprofile = () => {
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [univ, setUniv] = useState("");
  const [mob, setMob] = useState("");
  const [role, setRole] = useState("");
  const [spec, setSpec] = useState("");
  const [exper, setExper] = useState("");
  const [awards, setAwards] = useState(null);
  const [indux, setIndux] = useState(null);
  const [pubs, setPubs] = useState(null);
  const [projs, setProjs] = useState(null);
  const [image, setImage] = useState(null);

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
        console.log(json.role);
        if (json.role === "0") {
          setName(json.name);
          setEmail(json._id);
          setUniv(json.university);
          setMob(json.mobile_number);
          setRole("Student");
          setImage(json.Image);
        } else {
          setName(json.name);
          setEmail(json._id);
          setUniv(json.university);
          setMob(json.mobile_number);
          setRole("Faculty");
          setSpec(json.specialization);
          setExper(json.experience);
          setAwards(json.Awards_and_Honors);
          setIndux(json.Industrial_experience);
          setPubs(json.Publications);
          setProjs(json.projects);
          setImage(json.Image);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
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
          <h1>My Profile</h1>
        </FormLabel>

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <img
            src={image}
            alt="img"
            width="25%"
          />
          <FormLabel id="role">
            <h3>Name</h3>
          </FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={name}
            autoFocus
            disabled
          />
          <br />
          <FormLabel id="role">
            <h3>User Email</h3>
          </FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={email}
            autoFocus
            disabled
          />

          <br />
          <FormLabel id="role">
            <h3>University</h3>
          </FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={univ}
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
            value={mob}
            autoFocus
            disabled
          />

          <br />
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
          />
          <br />
          {role === "Faculty" && (
            <FormLabel id="role">
              <h3>Specialization</h3>
            </FormLabel>
          )}
          {role === "Faculty" && (
            <TextField
              margin="normal"
              required
              fullWidth
              value={spec}
              autoFocus
              disabled
            />
          )}

          <br />
          {role === "Faculty" && (
            <FormLabel id="role">
              <h3>Experience</h3>
            </FormLabel>
          )}
          {role === "Faculty" && (
            <TextField
              margin="normal"
              required
              fullWidth
              value={exper}
              autoFocus
              disabled
            />
          )}

          {role === "Faculty" && (
            <div>
              <br />
              <br />
              <br />
            </div>
          )}

          {role === "Faculty" && (
            <FormLabel id="role">
              <h3>Awards and Honours</h3>
            </FormLabel>
          )}

          {role === "Faculty" &&
            awards !== null &&
            awards.length > 0 &&
            awards.map((friend, index) => (
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

          {role === "Faculty" && awards !== null && awards.length === 0 && (
            <div>Empty</div>
          )}

          {role === "Faculty" && (
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
          )}
          {role === "Faculty" && (
            <FormLabel id="role">
              <h3>Industrial Experience</h3>
            </FormLabel>
          )}

          {role === "Faculty" &&
            indux !== null &&
            indux.length > 0 &&
            indux.map((friend, index) => (
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

          {role === "Faculty" && indux !== null && indux.length === 0 && (
            <div>Empty</div>
          )}

          {role === "Faculty" && (
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
          )}
          {role === "Faculty" && (
            <FormLabel id="role">
              <h3>Publications</h3>
            </FormLabel>
          )}

          {role === "Faculty" &&
            pubs !== null &&
            pubs.length > 0 &&
            pubs.map((friend, index) => (
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

          {role === "Faculty" && pubs !== null && pubs.length === 0 && (
            <div>Empty</div>
          )}


          
          {role === "Faculty" && (
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
          )}
          {role === "Faculty" && (
            <FormLabel id="role">
              <h3>Projects</h3>
            </FormLabel>
          )}

          {role === "Faculty" &&
            projs !== null &&
            projs.length > 0 &&
            projs.map((friend, index) => (
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
          {role === "Faculty" && projs !== null && projs.length === 0 && (
            <div>Empty</div>
          )}

          <Link to={"/editmyprofile"}>
            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Edit Profile
            </Button>
          </Link>

          {/* <Button onClick={()=> console.log(awards)}>Show awards</Button> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
