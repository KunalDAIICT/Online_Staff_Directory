import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
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
  const [spec, setSpec] = useState("");
  const [exper, setExper] = useState("");
  const [awards, setAwards] = useState(null);
  const [indux, setIndux] = useState(null);
  const [pubs, setPubs] = useState(null);
  const [projs, setProjs] = useState(null);

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
          setSpec(json.specialization);
          setExper(json.experience);
          setAwards(json.Awards_and_Honors);
          setIndux(json.Industrial_experience);
          setPubs(json.Publications);
          setProjs(json.projects);
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
    // const response = await fetch("http://localhost:3000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // });
    // console.log(response);
    // if (response.status === 200) {
    //   alert("Logged in successfully");
    //   navigate("/");
    // } else if (response.status === 401) {
    //   alert("Invalid Username and Password, Please try again!");
    // } else {
    //   alert("An unknown error occured, Please try again!");
    // }
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // var a = "0";
    // if (data.get("role") === "faculty") {
    //   a = "1";
    // }
    // console.log(a);
    // const userData = {
    //   password: data.get("password"),
    //   role: a,
    //   userEmail: data.get("email"),
    // };
    // console.log(userData);
    // handleUserSignup(userData);
  };

  const handleAwardsChange = (event, index) => {
    const newAwards = [...awards];
    newAwards[index] = event.target.value;
    setAwards(newAwards);
    console.log(awards);
  };

  const handleAddAward = () => {
    const newAwards = [...awards];
    newAwards.push("");
    setAwards(newAwards);
    console.log(awards);
  };

  const handleDeleteAward = (index) => {
    const newAwards = [...awards];
    newAwards.splice(index, 1);
    setAwards(newAwards);
    console.log(awards);
  };

  const handleInduxChange = (event, index) => {
    const newIndux = [...indux];
    newIndux[index] = event.target.value;
    setIndux(newIndux);
    console.log(indux);
  };

  const handleAddIndux = () => {
    const newIndux = [...indux];
    newIndux.push("");
    setIndux(newIndux);
    console.log(indux);
  };

  const handleDeleteIndux = (index) => {
    const newIndux = [...indux];
    newIndux.splice(index, 1);
    setIndux(newIndux);
    console.log(indux);
  };

  const handlePubsChange = (event, index) => {
    const newPubs = [...pubs];
    newPubs[index] = event.target.value;
    setPubs(newPubs);
    console.log(pubs);
  };

  const handleAddPubs = () => {
    const newPubs = [...pubs];
    newPubs.push("");
    setPubs(newPubs);
    console.log(pubs);
  };

  const handleDeletePubs = (index) => {
    const newPubs = [...pubs];
    newPubs.splice(index, 1);
    setPubs(newPubs);
    console.log(pubs);
  };

  const handleProjsChange = (event, index) => {
    const newProjs = [...projs];
    newProjs[index] = event.target.value;
    setProjs(newProjs);
    console.log(projs);
  };

  const handleAddProjs = () => {
    const newProjs = [...projs];
    newProjs.push("");
    setProjs(newProjs);
    console.log(projs);
  };

  const handleDeleteProjs = (index) => {
    const newProjs = [...projs];
    newProjs.splice(index, 1);
    setProjs(newProjs);
    console.log(projs);
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
        <FormLabel>
          <h1>Edit Profile</h1>
        </FormLabel>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormLabel id="role">
            <h3>Name</h3>
          </FormLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoFocus
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
            onChange={(event) => setEmail(event.target.value)}
            autoFocus
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
            onChange={(event) => setUniv(event.target.value)}
            autoFocus
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
            onChange={(event) => setMob(event.target.value)}
            autoFocus
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
              onChange={(event) => setSpec(event.target.value)}
              autoFocus
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
              onChange={(event) => setExper(event.target.value)}
              autoFocus
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
            awards.map((friend, index) => (
              <div key={index}>
                <TextField
                  // className={classes.textField}
                  // label={`Friend ${index + 1}`}
                  variant="outlined"
                  value={friend}
                  onChange={(event) => handleAwardsChange(event, index)}
                />
                <Button
                  // className={classes.button}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteAward(index)}
                >
                  Delete
                </Button>
              </div>
            ))}

          {role === "Faculty" && (
            <Button
              // className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleAddAward}
            >
              Add Award
            </Button>
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
            indux.map((friend, index) => (
              <div key={index}>
                <TextField
                  // className={classes.textField}
                  // label={`Friend ${index + 1}`}
                  variant="outlined"
                  value={friend}
                  onChange={(event) => handleInduxChange(event, index)}
                />
                <Button
                  // className={classes.button}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteIndux(index)}
                >
                  Delete
                </Button>
              </div>
            ))}

          {role === "Faculty" && (
            <Button
              // className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleAddIndux}
            >
              Add Industrial Experience
            </Button>
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
            pubs.map((friend, index) => (
              <div key={index}>
                <TextField
                  // className={classes.textField}
                  // label={`Friend ${index + 1}`}
                  variant="outlined"
                  value={friend}
                  onChange={(event) => handlePubsChange(event, index)}
                />
                <Button
                  // className={classes.button}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeletePubs(index)}
                >
                  Delete
                </Button>
              </div>
            ))}

          {role === "Faculty" && (
            <Button
              // className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleAddPubs}
            >
              Add Publications
            </Button>
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
            projs.map((friend, index) => (
              <div key={index}>
                <TextField
                  // className={classes.textField}
                  // label={`Friend ${index + 1}`}
                  variant="outlined"
                  value={friend}
                  onChange={(event) => handleProjsChange(event, index)}
                />
                <Button
                  // className={classes.button}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteProjs(index)}
                >
                  Delete
                </Button>
              </div>
            ))}

          {role === "Faculty" && (
            <Button
              // className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleAddProjs}
            >
              Add Project
            </Button>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save Changes
          </Button>

          {/* <Button onClick={()=> console.log(awards)}>Show awards</Button> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
