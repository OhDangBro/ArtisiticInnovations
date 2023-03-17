import { Container, Grid, Typography, IconButton } from '@material-ui/core';
import { Email, Phone } from '@material-ui/icons';

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
    color: 'hsl(274deg 53% 63%)',
  },
  text: {
    color: 'black',
  },
};

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:artinnovations.deborah@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+17328937440";
  };

  return (
    <footer id="#Footer" style={{...styles.container, width: "100vw"}} >
      <Container maxWidth="xl">
      <Grid container spacing={1}  style={{ display: 'flex', flexWrap: 'wrap', margin: "0" }}>
          <Grid item xs={4} style={{ ...styles.section, flexBasis: '33%', justifyContent: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              <IconButton aria-label="Email" onClick={handleEmailClick} style={styles.icon}>
                <Email />
              </IconButton>
            </div>
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
              <IconButton aria-label="Phone" onClick={handlePhoneClick} style={styles.icon}>
                <Phone />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
