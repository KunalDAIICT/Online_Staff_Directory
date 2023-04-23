import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import '../App.css';

const theme = createTheme();

export const Myprofile = () => {
  const token = localStorage.getItem("token");

  // var data=null;
  const [data, setData] = useState(null);

  const myStyle = {
    borderStyle: "solid",
    borderColor:"#dedede",
    borderWidth:"1px",
    borderRadius:"5px",
    padding:"5px 8px 5px 10px",
    margin:"5px",
    backgroundColor:"white",
  };

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
      } catch (error) {
        console.error("Error fetching data:", error);
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
              <Box component="form" sx={{ mt: 1 }}>
              if(data.Image !== null){
                <img
                  src= {data.Image}
                  alt="img"
                  width="25%"
                />
              }:else{
                <img
                src= "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                alt="img"
                width="25%"
              />
              }
                <br />

                <Typography variant="h5" align="center">
                  Name
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {data !== null && <div style={myStyle}>{data.name}</div>}
                </Typography>

                <br />

                <Typography variant="h5" align="center">
                  User Email
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {data !== null && <div style={myStyle}>{data._id}</div>}
                </Typography>

                <br />

                <Typography variant="h5" align="center">
                  University
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {data !== null && (
                    <div style={myStyle}>{data.university}</div>
                  )}
                </Typography>

                <br />

                <Typography variant="h5" align="center">
                  Role
                </Typography>
                <Typography variant="subtitle1" align="center">
                  {data !== null && (
                    <div>
                      {data.role === "0" && <div style={myStyle}>Student</div>}
                      {data.role === "1" && <div style={myStyle}>Faculty</div>}
                    </div>
                  )}
                </Typography>

                <br />

                Mobile number

                {data !== null && data.role === "1" && (
                  <div>
                    <Typography variant="h5" align="center">
                      Specialization
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      {data !== null && (
                        <div style={myStyle}>{data.specialization}</div>
                      )}
                    </Typography>

                    <br />

                    <Typography variant="h5" align="center">
                      Experience
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      {data !== null && (
                        <div style={myStyle}>{data.experience}</div>
                      )}
                    </Typography>

                    <br />

                    <Typography variant="h5" align="center">
                      Awards and Honours
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      {data !== null && (
                        <div style={myStyle}>
                          {data.Awards_and_Honors.map((str, index) => (
                            <p key={index}>{str}</p>
                          )).map((str, index) => (
                            <p key={index}>{str}</p>
                          ))}
                        </div>
                      )}
                    </Typography>

                    <br />

                    <Typography variant="h5" align="center">
                      Industrial Experience
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      {data !== null && (
                        <div style={myStyle}>
                          {data.Industrial_experience.map((str, index) => (
                            <p key={index}>{str}</p>
                          )).map((str, index) => (
                            <p key={index}>{str}</p>
                          ))}
                        </div>
                      )}
                    </Typography>

                    <br />

                    <Typography variant="h5" align="center">
                      Publications
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      {data !== null && (
                        <div style={myStyle}>
                          {data.Industrial_experience.map((str, index) => (
                            <p key={index}>{str}</p>
                          )).map((str, index) => (
                            <p key={index}>{str}</p>
                          ))}
                        </div>
                      )}
                    </Typography>

                    <br />

                    <Typography variant="h5" align="center">
                      Publications
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      {data !== null && (
                        <div style={myStyle}>
                          {data.Publications.map((str, index) => (
                            <p key={index}>{str}</p>
                          )).map((str, index) => (
                            <p key={index}>{str}</p>
                          ))}
                        </div>
                      )}
                    </Typography>

                    <br />

                    <Typography variant="h5" align="center">
                      Projects
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                      {data !== null && (
                        <div style={myStyle}>
                          {data.projects.map((str, index) => (
                            <p key={index}>{str}</p>
                          )).map((str, index) => (
                            <p key={index}>{str}</p>
                          ))}
                        </div>
                      )}
                    </Typography>
                  </div>
                )}

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
