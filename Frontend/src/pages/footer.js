import {
  Grid,
  Box,
  Typography,
  Stack,
} from '@mui/material'
import da_logo from "../data/Logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';



export default function Footer() {
  return (
    <Box sx={{bgcolor: 'rgb(46,116,189)', mt: 10}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 7, mt: 2}}>
            <img src={da_logo} alt="da_logo" width="35%"></img>
        </Grid>
        <Grid item xs={12} md={3} sx={{display: 'flex', justifyContent: 'center',  mb: 6, mt: 6}}>
          <Stack direction="column">
            <Typography sx={{color: 'white'}}>
              Daiict college, Reliance Cross Rd, Gandhinagar, Gujarat 382007
            </Typography>
            <Typography  sx={{mt: 2, color: 'white'}}>
              +91 7968261700
            </Typography>
            <Link to={"mailto:campus.connect.it314@gmail.com"}><Typography sx={{color: 'white', '&:hover': {cursor: 'pointer', color: 'blue'}}}>
              {/* add mail to mailto:faculty@id.com */}
              campus.connect.it314@gmail.com
            </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3} sx={{display: 'flex', justifyContent: 'center', mb: 7, mt: 4}}>
            <Stack>
              <Typography sx={{color: 'white', mb: 2}}>
                <b>Useful Links</b>
              </Typography >
              <Link to={"/"}><Typography align='center' sx={{color: 'white', '&:hover': {cursor: 'pointer', color: 'black'}}}>
                Home
              </Typography>
              </Link>
              <Link to={"/UniversityDetails"}><Typography align='center' sx={{color: 'white', '&:hover': {cursor: 'pointer', color: 'black'}}}>
                Universities
              </Typography>
              </Link>
              <Link to={"/AboutUs"}><Typography align='center' sx={{color: 'white', '&:hover': {cursor: 'pointer', color: 'black'}}}>
                About
              </Typography>
              </Link>
              <Link to={"/loginpage"}><Typography align='center' sx={{color: 'white', '&:hover': {cursor: 'pointer', color: 'black'}}}>
                Login
              </Typography>
              </Link>
              <Link to={"/signup"}><Typography align='center' sx={{color: 'white', '&:hover': {cursor: 'pointer', color: 'black'}}}>
                SignUp
              </Typography>
              </Link>
            </Stack>
        </Grid>
        <Grid item xs={12} md={3} sx={{display: 'flex', justifyContent: 'center',  mb: 7, mt: 4}}>
          <Stack>
            <Typography sx={{mb: 2, color: 'white'}}>
              <b>About the Website</b>
            </Typography>
            <Typography sx={{color: 'white'}}>
              Our website provides information of professional acheivement and contact of faculties of multiple universities.
            </Typography>
            <Stack direction="row" spacing={2} sx={{mt: 2, justifyContent:'center'}}>
              {/* Add links here */}
              <FacebookIcon sx={{color: 'white', '&:hover': {cursor: 'pointer', color: 'black'}}}/> 
              <InstagramIcon sx={{color: 'white', '&:hover': {cursor: 'pointer', color: 'black'}}}/>
              <LinkedInIcon sx={{color: 'white', '&:hover': {cursor: 'pointer', color: 'black'}}}/>
              <TwitterIcon sx={{color: 'white', '&:hover': {cursor: 'pointer', color: 'black'}}}/>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}