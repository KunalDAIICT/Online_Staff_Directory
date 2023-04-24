import React, { useState } from 'react';
import '../admin_home.css'; // import CSS styles
import { AppBar, Toolbar, Tabs, Tab, Stack, Typography, Button, IconButton, Box, Container, InputAdornment, TextField, Drawer } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


// This page will show the data of the approved faculty members to the admin. The admin can delete the faculty members from this page.

// faculty data
const facultyData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        mobile: '+1 123-456-7890',
        specialization: 'Computer Science',
        isapproved: true,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    },
    {
        id: 2,
        name: 'Saurabh Tiwari',
        email: 'janesmith@example.com',
        mobile: '+1 234-567-8901',
        specialization: "Mathematics",
        isapproved: false,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    },
    {
        id: 3,
        name: 'Anil Roy',
        email: 'janesmith@example.com',
        mobile: '+1 234-567-8901',
        specialization: 'Mathematics',
        isapproved: false,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    },
    {
        id: 4,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        mobile: '+1 234-567-8901',
        specialization: 'Mathematics',
        isapproved: true,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    },
    {
        id: 5,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        mobile: '+1 234-567-8901',
        specialization: 'Mathematics',
        isapproved: true,
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    },
];


const FacultyCardApproved = ({ faculty }) => (

    <Box className="faculty-card">
        <div className="faculty-image-container">
            <img className="faculty-image" src={faculty.imageUrl} alt={faculty.name} />
        </div>
        <div className="faculty-details">
            <h3 className="faculty-name">{faculty.name}</h3>
            <p className="faculty-email">{faculty.email}</p>
            <p className="faculty-mobile">{faculty.mobile}</p>
            <p className="faculty-specialization">{faculty.specialization}</p>
            <p>
                <IconButton>
                    <LinkedInIcon />
                </IconButton>
                <IconButton>
                    <SchoolIcon />
                </IconButton>
                <IconButton>
                    <LinkIcon />
                </IconButton>
            </p>
            <p><Button variant="contained" color="error">Delete</Button></p>
        </div>
    </Box>
);


// faculty card component
const FacultyCardNotApproved = ({ faculty }) => (

    <Box className="faculty-card">
        <div className="faculty-image-container">
            <img className="faculty-image" src={faculty.imageUrl} alt={faculty.name} />
        </div>
        <div className="faculty-details">
            <h3 className="faculty-name">{faculty.name}
            </h3>
            <p className="faculty-email">{faculty.email}</p>
            <p className="faculty-mobile">{faculty.mobile}</p>
            <p className="faculty-specialization">{faculty.specialization}</p>
            <p>
                <IconButton>
                    <LinkedInIcon />
                </IconButton>
                <IconButton>
                    <SchoolIcon />
                </IconButton>
                <IconButton>
                    <LinkIcon />
                </IconButton>
            </p>
            <Stack direction="row" spacing={1.5}>
                <Button variant="contained" color="success" startIcon={<DoneIcon />}>Approve</Button>
                <Button variant="contained" color="error" startIcon={<ClearIcon />}>Delete</Button>
            </Stack>
        </div>
    </Box>
);


// faculty details page component
const FacultyDetails = (isapproved) => {
    // const checkapproved = isapproved;
    return (
        <div>
            <div className="faculty-details-page">
                <div className="faculty-cards-box">
                    <div className="faculty-cards-container">
                        {isapproved ? (
                            facultyData.filter(faculty => {
                                return(
                                    faculty.isapproved === true
                                );
                            }).map((faculty) => (
                                <FacultyCardApproved key={faculty.id} faculty={faculty} />
                            ))
                        ) : (
                            facultyData.filter(faculty => {
                                return(
                                    faculty.isapproved === false
                                );
                            }).map((faculty) => (
                                <FacultyCardNotApproved key={faculty.id} faculty={faculty} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function AdminHome() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Approved Faculties" value="1" />
                        <Tab label="Pending Approvals" value="2" />
                        <Tab label="Add University" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    {FacultyDetails(true)}
                </TabPanel>
                <TabPanel value="2">
                    {FacultyDetails(false)}
                </TabPanel>
                <TabPanel value="3">
                    {/* {FacultyDetails(false)} */}
                </TabPanel>
            </TabContext>
        </Box>
    );
}




