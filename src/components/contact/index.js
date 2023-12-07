import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ContactForm from '../contactform';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '1em 0',
  },
  header: {
    fontSize: '3.5em',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '1px 1px 0px #dddddd',
    color: 'hsl(274deg 53% 63%)',
    fontFamily: 'segoeFont',
  },
  h2: {
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'segoeFont',
    margin: '.5em 0',
    textShadow: '1px 1px 0px #dddddd', 
  },
  h3: {
    fontSize: '1.2em',
    textAlign: 'center',
    margin: '1em 0',
    fontFamily: 'segoeFont',
    textShadow: '1px 1px 0px #dddddd', 
  },
  phoneIcon: {
    marginRight: '0.5em',
    borderRadius: '50%',
    backgroundColor: 'hsl(274deg 53% 63%)',
    color: 'white',
    padding: '0.5em',
  },
  h5: {
    fontFamily: "segoeFont",
    
  },
};

const ContactInfo = () => {
  return (
    <React.Fragment>
    <Container maxWidth="xl" id="Contact">
      <div style={styles.container}>
        <header style={styles.header}>Contact Us:</header>
        <h2 style={styles.h3} className="contacth2">
          We're always happy to hear from you. Please feel free to get in touch with us using the contact form or contact information below.
        </h2>
        <ContactForm/>
        <Box className="contactIconText" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', flex: 2 }}>


  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flex: 1, margin: "40px" }}>
    <LocalPhoneIcon style={styles.phoneIcon} />
    <Typography style={styles.h5} variant="h5">Call/Text:</Typography>
    <a href="tel:732-261-7944">
      <Typography variant="subtitle1">732-261-7944</Typography>
    </a>
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flex: 1, margin: "40px" }}>
    <EmailIcon style={styles.phoneIcon} />
    <Typography style={styles.h5} variant="h5">Email:</Typography>
    <a href="mailto:artisticinnovations.deborah@gmail.com">
      <Typography variant="subtitle1">artisticinnovations.deborah@gmail.com</Typography>
    </a>
  </Box>
</Box>
<h3 style={styles.h3} className="contacth3">
          Pricing is based on your specific requirements. Please contact me for more information.
        </h3>
        <h3 style={styles.h3} className="contacth3">
          We're fully insured and NJ state licensed/certified.
        </h3>
      </div>
    </Container>
  </React.Fragment>
  );
};

export default ContactInfo;