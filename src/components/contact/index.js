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
  },
  header: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '2em',
    color: 'black',
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
  phone: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1em',
  },
  phoneIcon: {
    marginRight: '0.5em',
  },
  email: {
    marginTop: '1em',
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


          <Box sx={styles.container}>
            <Typography variant="h5">Call or Text at:</Typography>
            <div style={styles.phone}>
              <LocalPhoneIcon style={styles.phoneIcon} />
              <a href="tel:555-555-5555">
                <Typography variant="subtitle1">555-555-5555</Typography>
              </a>
            </div>
            <Typography variant="h5">Or Send Me an Email at:</Typography>
            <div style={styles.phone}>
              <EmailIcon style={styles.phoneIcon} />
              <a href="mailto:info@email.com">
                <Typography variant="subtitle1">info@email.com</Typography>
              </a>
            </div>
          </Box>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ContactInfo;