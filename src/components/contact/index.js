import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';



const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '1em 0',
    paddingTop: "10%"

  },
  header: {
    fontSize: '3.5em',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '2em',
    color: 'hsl(274deg 53% 63%)',
    fontFamily: 'Segoe',
    textDecoration: 'underline',
  },
  h2: {
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '1em 0',
  },
  h3: {
    fontSize: '1.2em',
    textAlign: 'center',
    margin: '1em 0',
  },
  phoneIcon: {
    marginRight: '0.5em',
    borderRadius: '50%',
    backgroundColor: 'hsl(274deg 53% 63%)',
    color: 'white',
    padding: '0.5em',
  },
};

const ContactInfo = () => {
  return (
    <React.Fragment>
    <Container maxWidth="xl">
      <div style={styles.container}>
        <header style={styles.header}>Contact Us</header>
        <h2 style={styles.h3}>
          We're always happy to hear from you. Please feel free to get in touch with us using the contact information below.
        </h2>
        <h3 style={styles.h3}>
          Pricing is based on your specific requirements. Please contact me for more information.
        </h3>
        <h3 style={styles.h3}>
          We're fully insured and NJ state licensed/certified.
        </h3>

        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', flex: 2 }}>
  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flex: 1, margin: "40px" }}>
    <LocalPhoneIcon style={styles.phoneIcon} />
    <Typography variant="h5">Call/Text:</Typography>
    <a href="tel:555-555-5555">
      <Typography variant="subtitle1">555-555-5555</Typography>
    </a>
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flex: 1, margin: "40px" }}>
    <EmailIcon style={styles.phoneIcon} />
    <Typography variant="h5">Email:</Typography>
    <a href="mailto:info@email.com">
      <Typography variant="subtitle1">info@email.com</Typography>
    </a>
  </Box>
</Box>
      </div>
    </Container>
  </React.Fragment>
  );
};

export default ContactInfo;