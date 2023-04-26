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




export default function Footer() {
  return (
    <Box sx={{bgcolor: 'lightblue'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 7, mt: 2}}>
            <img src={da_logo} alt="da_logo" width="35%"></img>
        </Grid>
        <Grid item xs={12} md={3} sx={{display: 'flex', justifyContent: 'center',  mb: 6, mt: 6}}>
          <Stack direction="column">
            <Typography >
              Daiict college, Reliance Cross Rd, Gandhinagar, Gujarat 382007
            </Typography>
            <Typography  sx={{mt: 2}}>
              +91 7968261700
            </Typography>
            <Typography sx={{'&:hover': {cursor: 'pointer', color: 'blue'}}}>
              {/* add mail to mailto:faculty@id.com */}
              campus_connect@gmail.com
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3} sx={{display: 'flex', justifyContent: 'center', mb: 7, mt: 4}}>
            <Stack>
              <Typography sx={{mb: 2}}>
                <b>Useful Links</b>
              </Typography>
              <Typography align='center' sx={{'&:hover': {cursor: 'pointer', color: 'white'}}}>
                Home
              </Typography>
              <Typography align='center' sx={{'&:hover': {cursor: 'pointer', color: 'white'}}}>
                About
              </Typography>
              <Typography align='center' sx={{'&:hover': {cursor: 'pointer', color: 'white'}}}>
                Login
              </Typography>
              <Typography align='center' sx={{'&:hover': {cursor: 'pointer', color: 'white'}}}>
                Contact
              </Typography>
            </Stack>
        </Grid>
        <Grid item xs={12} md={3} sx={{display: 'flex', justifyContent: 'center',  mb: 7, mt: 4}}>
          <Stack>
            <Typography sx={{mb: 2}}>
              <b>About the Company</b>
            </Typography>
            <Typography>
              Our website provides information of professional acheivement and contact of faculties of multiple universities.
            </Typography>
            <Stack direction="row" spacing={2} sx={{mt: 2}}>
              {/* Add links here */}
              <FacebookIcon sx={{'&:hover': {cursor: 'pointer', color: 'white'}}}/> 
              <InstagramIcon sx={{'&:hover': {cursor: 'pointer', color: 'white'}}}/>
              <LinkedInIcon sx={{'&:hover': {cursor: 'pointer', color: 'white'}}}/>
              <TwitterIcon sx={{'&:hover': {cursor: 'pointer', color: 'white'}}}/>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
