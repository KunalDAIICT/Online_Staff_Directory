import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
import { Navbar } from "./Navbar";
import MenuItem from '@mui/material/MenuItem'
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
const theme = createTheme();

export const EditMyProfile = () => {
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newEmail , setNewEmail] = useState("");
  const [univ, setUniv] = useState("");
  const [mob, setMob] = useState("");
  const [role, setRole] = useState("");
  const [spec, setSpec] = useState("");
  const [exper, setExper] = useState("");
  const [awards, setAwards] = useState(null);
  const [indux, setIndux] = useState(null);
  const [pubs, setPubs] = useState(null);
  const [projs, setProjs] = useState(null);
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [image, setImage] = useState(null);
  const [allUni, setAllUni] = useState([]);
  const [isvalid, setIsvalid] = useState(true);
  const [matchPassword, setMatchPassword] = useState(false);

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


  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseuni = await fetch(`${process.env.REACT_APP_BASE_URL}/getUniversities`, {
            method: "GET",
        });
        console.log(responseuni);
        const jsonuni = await responseuni.json();
        setAllUni(jsonuni);
        console.log(jsonuni);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
    
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/profile`, {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (json.role === "0") {
          setName(json.name);
          setEmail(json._id);
          setNewEmail(json._id);
          setUniv(json.university);
          setMob(json.mobile_number);
          setRole("Student");
          // setPass(json.password);
          // setCpass(json.password);
          setImage(json.Image);
        } else {
          setName(json.name);
          setEmail(json._id);
          setNewEmail(json._id);
          setUniv(json.university);
          setMob(json.mobile_number);
          setRole("Faculty");
          setSpec(json.specialization);
          setExper(json.experience);
          setAwards(json.Awards_and_Honors);
          setIndux(json.Industrial_experience);
          setPubs(json.Publications);
          setProjs(json.projects);
          // setPass(json.password);
          // setCpass(json.password);
          setImage(json.Image);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  let navigate = useNavigate();
  const handleEditProfile = async (userData) => {
    console.log(userData);
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/editProfile`, {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(response);
    if (response.status === 200) {
      alert("Profile updated successfully");
      navigate("/myprofile");
    } else if (response.status === 404) {
      alert("Try again with a different email and password!");
    } else {
      alert("An unknown error occured, Please try again!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var userData={};

   
      if (role === "Student") {
        userData = {...userData,
          confirmpassword: cpass,
          mobile_number: mob,
          name: name,
          password: pass,
          role: "0",
          university: univ,
          userEmail:newEmail,
          Image: image,
          isVerified: newEmail===email?true:false
        };
      }
      else{
        userData = {...userData,
          confirmpassword: cpass,
          mobile_number: mob,
          name: name,
          password: pass,
          role: "1",
          university: univ,
          userEmail: email,
          Awards_and_Honors: awards,
          Industrial_experience: indux,
          Publications: pubs,
          projects: projs,
          specialization: spec,
          experience: exper,
          Image: image,
          isVerified: newEmail===email?true:false
        };
      }
    
    console.log(userData);
    handleEditProfile(userData);
  };

  function convertTobase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
  
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
  
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertTobase64(file);
    setImage(base64);
    console.log(base64); 
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
          width: "50%",
        }}
      >
        <FormLabel>
          <h1>Edit Profile</h1>
        </FormLabel>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <FormLabel id="role">
            <h3>Profile Image</h3>
          </FormLabel>
          <img src={image} alt="profile-img" width="25%"/>
          <FormLabel id="role">
            <h3>Update Profile Image</h3>
          </FormLabel>
          <input type="file" onChange={handleImageChange} />
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
            autoFocus
            disabled
          />
          <br />
          <FormLabel id="role">
            <h3>University</h3>
          </FormLabel>
          
          
                <TextField
                    required = {true}
                    fullWidth
                    name="university"
                    label='University'
                    select
                    margin="normal"
                    value={univ}
                    onChange={(event) => setUniv(event.target.value)}
                    autoFocus
                >
                  {allUni.map(university => (
                <MenuItem value={university.name}> {university.name} </MenuItem>
                  ))}
                    {/* <MenuItem value='Dhirubhai Ambani Institute of Information and Communication Technology'>Dhirubhai Ambani Institute of Information and Communication Technology</MenuItem> */}
                  
                </TextField>
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

          <Grid>
            <Grid>
          
          </Grid>
          <Grid>
         
          </Grid>
          </Grid>

          <Grid container>
              <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
              
            </Grid>

          {/* <Button onClick={()=> console.log(awards)}>Show awards</Button> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
