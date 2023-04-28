import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from "./header";
import Footer from './footer';
import img1 from '../data/about_us1.jpg'
import img2 from '../data/about_us2.jpg'
import img3 from '../data/about_us3.jpg'

const AboutUs = () => {
  return (
    <>
    <Header />

      <Box sx={{display: 'flex', mt: 5, justifyContent: 'center'}}>
        <img src={img1} alt="image not found" width='30%' align="center"></img>
      </Box>

      {/* <Divider width="100%"/> */}
      <Container component="main" sx={{mt: 10, textAlign: "center", bgcolor: "lightcyan", borderRadius: 10, boxShadow: 3}}>
        <Typography variant='h3' align="center" sx={{ mb: 4, mt: 2, pt: 3}}>
          Who we are
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18 }}>
          We are a team of college students who are passionate about creating user-friendly and efficient solutions for academic institutions. Our goal is to provide students with easy access to faculty information, helping them to save time and effort while also improving their academic experience.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18 }}>
          Our team understands the importance of having a reliable and effective system for accessing faculty information. With this in mind, we have created a comprehensive database of faculty details that can be easily accessed by any student at any time, without the need for registration or login.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18, pb: 3 }}>
          Our system is designed to be user-friendly and intuitive, with a graphical user interface that makes it easy to search for faculty members by name, department, courses, area of expertise, and professional interest. Whether you are looking for a specific faculty member or simply browsing for information, our system makes it easy and convenient to find what you need.
        </Typography>
        {/* <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18, pb: 3 }}>
          Thank you for choosing our online faculty directory for multi-university. We hope you find our website useful and informative, and welcome any feedback or suggestions you may have.
        </Typography> */}
      </Container>


      <Box sx={{display: 'flex', mt: 15, justifyContent: 'center'}}>
        <img src={img2} alt="image not found" width='30%' align="center"></img>
      </Box>

      <Container component="main" sx={{mt: 10, textAlign: "center", bgcolor: "lightcyan", borderRadius: 10, boxShadow: 3}}>
        <Typography variant='h3' align="center" sx={{ mb: 4, mt: 2, pt: 3}}>
          What we do
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18 }}>
          Online faculty staff directory empowers user to easily view college faculty details. Student can
          easily view different college faculty details anywhere required at any time as this application is
          handy. This system is built with effective graphical user interface which enables user
          friendliness.
        </Typography>
        {/* <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18 }}>
          Our team is dedicated to ensuring that our directory remains up-to-date and accurate, with regular updates to the information we provide. We understand the importance of having accurate information on faculty members, and strive to provide the most current information available.
        </Typography> */}
        <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18, pb: 3 }}>
          User can search faculty details and view their respective details such as name
          department, courses, area of expertise, and professional interest. This system reduced time and
          cost of user. Here there are two entities who will access this system i.e. admin and student.
          Admin is authorized to add and manage all the faculty details. User doesn't require any
          registration or login to access this system. User can directly search for faculty and view their
          details. Data in database are maintained securely without any maintenance cost.
        </Typography>
      </Container>

      <Box sx={{display: 'flex', mt: 15, justifyContent: 'center'}}>
        <img src={img3} alt="image not found" width='30%' align="center"></img>
      </Box>

      <Container component="main" sx={{mt: 10, mb: 20, textAlign: "center", bgcolor: "lightcyan", borderRadius: 10, boxShadow: 3}}>
        <Typography variant='h3' align="center" sx={{ mb: 4, mt: 2, pt: 3}}>
          Goals
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18 }}>
          Provide a platform for users to easily search and view faculty details, including their names, departments, courses, areas of expertise, and professional interests.
          Reduce the time and cost for users to access faculty information, by providing a centralized and easily accessible system.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18, pb: 3 }}>
          Provide a user-friendly interface that does not require registration or login, making it easy for anyone to access faculty information.
          Allow authorized admin users to add and manage faculty details, ensuring that the database is up-to-date and accurate.
          Ensure that the data in the database is securely maintained without incurring any maintenance costs.
        </Typography>
        {/* <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18 }}>
          To ensure that our online courses meet the highest standards of quality and effectiveness, conducting regular evaluations of our courses and incorporating feedback from students and other stakeholders.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18 }}>
          To foster a culture of continuous improvement within our online education program, encouraging our faculty members to experiment with new instructional strategies and technologies to improve student learning outcomes.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18, pb: 3 }}>
        To support our institution's mission of providing high-quality, accessible education to our diverse student population, by ensuring that our online courses meet the needs of all learners, regardless of their backgrounds or learning styles.
        </Typography> */}
      </Container>

    <Footer />
    {/* <Container maxWidth="md">
      <Typography variant="h3" component="team" align="center" sx={{ mb: 4 }}>
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
      
      <Typography variant="h3" component="team" align="center" sx={{ mb: 4 }}>
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
    </Container> */}
  </>
  );
};

export default AboutUs;
