// import React, { useState } from "react";

// const UniversityForm = () => {

//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <div>
//       <h1>Upload and Display Image usign React Hook's</h1>

//       {selectedImage && (
//         <div>
//           <img
//             alt="not found"
//             width={"250px"}
//             src={URL.createObjectURL(selectedImage)}
//           />
//           <br />
//           <button onClick={() => setSelectedImage(null)}>Remove</button>
//         </div>
//       )}

//       <br />
//       <br />
      
//       <input
//         type="file"
//         name="myImage"
//         onChange={(event) => {
//           console.log(event.target.files[0]);
//           setSelectedImage(event.target.files[0]);
//         }}
//       />
//     </div>
//   );
// };

// export default UniversityForm;

import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Card, CardActionArea, CardMedia, CardContent, AppBar, Toolbar, IconButton } from '@mui/material';
import '../addUniversity.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import default_logo from '../data/upload_image.png'
const default_logo = "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
const theme = createTheme();

export default function UniversityForm() {

let navigate = useNavigate();

  const [image, setImage] = useState(default_logo);
  const [name, setName] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
    console.log(name)
  };

  const handleImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(image)
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     name: data.get('name'),
  //     image: data.get('image'),
  //   });
  // };
  const handleAddUniversity = async (userData) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/admin/addUniversity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify(userData),
    });
    console.log(response);
    if(response.status === 200){
      alert("University added successfully");
      // navigate('/loginpage');
    }
    else if(response.status === 404){
      alert("University already exists");
    }
    else{
      alert("An unknown error occured please try again!");
    }
  };

const handleSubmit = (event) => {
    event.preventDefault();
   var userData ={};
    userData = {...userData,
      name: name,
      Image: image,
    }

    console.log(userData);
    navigate('/adminhome')
    handleAddUniversity(userData);
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
    console.log(image);
    console.log(base64); 
  };

    return (
    <ThemeProvider theme={theme}>
      <>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            className="add-University-Box"
            sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Typography marginBottom="40px"  marginLeft="36px" variant='h4'>
                    <b>Add University</b>
                </Typography>
                <input
                    id="Image"
                    type="file"
                    onChange={handleImageChange}
                    display="hidden"
                />
                <Typography marginBottom="20px">
                </Typography>
                <Card margin="normal" sx={{height: 'auto', width: 300}}> {/*</Box> sx={{ maxWidth: 345}}>*/}
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height='auto'
                            width='20px'
                            image={image}
                            alt=""
                        />
                        <CardContent alignItems="center">
                            <Typography gutterBottom variant='h6' component="div" marginLeft="75px">
                                <i>Logo Preview</i>
                            {/* <label for="image-upload">
                                Click Here to Upload
                            </label> */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Typography marginBottom="20px">
                </Typography>
                <TextField
                margin='normal'
                required
                fullWidth
                multiline
                rows={2}
                variant='outlined'
                id="name"
                label="University Name"
                name="university_name"
                value={name}
                onChange={handleName}
                autoComplete="university_name"
                autoFocus
                sx={{ width: 300 }}
                />
                <br></br>
                <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 2, ml: 13}}
                >
                Add
                </Button>
            </Box>
            </Box>
        </Container>
      </>
    </ThemeProvider>
  );
}