import { Container, Grid, Typography, IconButton } from '@material-ui/core';
import { Email, Phone } from '@material-ui/icons';
import Jump from 'react-reveal/Jump';



const styles = {
  container: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '5vh',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTop: '1px solid black',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: '2em',
    borderRight: '1px solid black',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: '10rem',
    color: 'hsl(274deg 53% 63%)',
  },
  text: {
    color: 'black',
  },
  '@media (min-width: 600px)': {
    icon: {
      fontSize: '1rem',
    },
  },
};

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:artinnovations.deborah@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+17322617944";
  };

  return (
    <footer id="#Footer" style={{...styles.container, width: "100vw"}} >
      <Container maxWidth="xl">
      <Grid container spacing={1}  style={{ display: 'flex', flexWrap: 'wrap', margin: "0" }}>
          <Grid item xs={4} style={{ ...styles.section, flexBasis: '33%', justifyContent: 'flex-start' }}>
          <Jump>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              <IconButton aria-label="Email" onClick={handleEmailClick} style={styles.icon}>
                <Email />
              </IconButton>
              <Typography className="footerText" variant="body1" align="center" style={{ fontSize: '10px', ...styles.text, color: 'hsl(274deg 53% 63%)' }} onClick={handleEmailClick}>Email Me</Typography>
            </div>
            </Jump>
          </Grid>
          <Grid item xs={4} style={{ ...styles.section, flexBasis: '33.33%', justifyContent: 'center' }}>
            <div style={styles.contactInfo}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography className="footerText" variant="body1" align="center" style={{ fontSize: '12px', ...styles.text }}>Deborah Stair</Typography>
                <Typography className="footerText" variant="body1" align="center" style={{ fontSize: '12px', ...styles.text }}>artistic innovations &copy; {new Date().getFullYear()}</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} style={{ ...styles.section, flexBasis: '33.33%', justifyContent: 'flex-end' }}>
          <Jump>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
              <IconButton aria-label="Phone" onClick={handlePhoneClick} style={styles.icon}>
                <Phone />
              </IconButton>
              <Typography className="footerText" variant="body1" align="center" style={{ fontSize: '10px', ...styles.text, color: 'hsl(274deg 53% 63%)' }} onClick={handlePhoneClick}>Call/Text Me</Typography>
            </div>
            </Jump>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
