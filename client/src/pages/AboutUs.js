import React from 'react';
import { Container, Typography } from '@mui/material';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
        About Us
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        Our online faculty directory for multi-university is designed to provide a comprehensive listing of faculty members across multiple institutions. Our goal is to make it easier for students, researchers, and faculty members to connect and collaborate across universities, by providing a centralized hub for information on faculty members from multiple institutions.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        Our team is dedicated to ensuring that our directory remains up-to-date and accurate, with regular updates to the information we provide. We understand the importance of having accurate information on faculty members, and strive to provide the most current information available.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        Thank you for choosing our online faculty directory for multi-university. We hope you find our website useful and informative, and welcome any feedback or suggestions you may have.
      </Typography>
      
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 4 }}>
        Team members
      </Typography>
      <table className="table" align="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Student ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>VANSH ASHISH PARIKH</td>
            <td>202001011</td>
          </tr>
          <tr>
            <td>DEVANSHI PUJARA</td>
            <td>202001153</td>
          </tr>
          <tr>
            <td>ANSHU HIMANSHU SUTHAR</td>
            <td>202001416</td>
          </tr>
          <tr>
            <td>KUVADIYA JAY RAMESHBHAI</td>
            <td>202001042</td>
          </tr>
          <tr>
            <td>HOTWANI KUNAL SUNIL</td>
            <td>202001468</td>
          </tr>
          <tr>
            <td>PATEL DEVANSH MANISHKUMAR</td>
            <td>202001262</td>
          </tr>
          <tr>
            <td>SHAH POOJAN DIKESHKUMAR</td>
            <td>202001428</td>
          </tr>
          <tr>
            <td>PATEL SHUBHAM KAUSHIKKUMAR</td>
            <td>202001413</td>
          </tr>
          <tr>
            <td>KANPARIYA CHINTAN MANISHBHAI</td>
            <td>202001463</td>
          </tr>
          <tr>
            <td>DEV KISHOR DAVDA</td>
            <td>202001429</td>
          </tr>
          <tr>
            <td>SHAH RISHITKUMAR DHANESHBHAI</td>
            <td>202001411</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default AboutUs;
