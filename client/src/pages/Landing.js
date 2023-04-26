import {
  Container,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import front_page_img from '../data/front_page_img.jpeg'
import {Navbar} from '../pages/Navbar';
import Footer from './footer';

export default function FrontPage() {
  return (
    <div>
      <Navbar/>
      <Box sx={{display: 'flex', mt: 2, justifyContent: 'center'}}>
        <img src={front_page_img} alt="image not found" width='70%' align="center"></img>
      </Box>
      {/* <Divider width="100%"/> */}
      <Container component="main" sx={{mt: 3, textAlign: "center", bgcolor: "lightcyan", borderRadius: 10, boxShadow: 3}}>
        <Typography variant='h3' align="center" sx={{ mb: 4, mt: 2, pt: 3}}>
          Campus Connect
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Our online faculty directory for multi-university is designed to provide a comprehensive listing of faculty members across multiple institutions. Our goal is to make it easier for students, researchers, and faculty members to connect and collaborate across universities, by providing a centralized hub for information on faculty members from multiple institutions.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Our team is dedicated to ensuring that our directory remains up-to-date and accurate, with regular updates to the information we provide. We understand the importance of having accurate information on faculty members, and strive to provide the most current information available.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, pb: 3 }}>
          Thank you for choosing our online faculty directory for multi-university. We hope you find our website useful and informative, and welcome any feedback or suggestions you may have.
        </Typography>
      </Container>
      <Box sx={{display: 'flex', mt: 5, mb: 3, justifyContent: 'center'}}>
      </Box>
    </div>
  );
}
