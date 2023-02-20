import { Container, Grid, Typography } from '@material-ui/core';

const styles = {
  container: {
    backgroundColor: '#F5F5F5',
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '3vh',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
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
    color: 'black',
    fontWeight: 'bold',
  },
};

const Footer = () => {
  return (
    <footer style={styles.container}>
      <Container maxWidth="xl">
        <Grid container spacing={1} style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Grid item xs={4} style={{ ...styles.section, flexBasis: '33%', justifyContent: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              {/* <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>FULLY INSURED</Typography>
              <Typography variant="body1" align="center" style={{ fontSize: '12px' }} >NJ STATE LICENSED/CERTIFIED</Typography> */}
            </div>
          </Grid>
          {/* <div style={styles.divider}></div> */}
          <Grid item xs={4} style={{ ...styles.section, flexBasis: '33.33%', justifyContent: 'center' }}>
            <div style={styles.contactInfo}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>Deborah Stair</Typography>
                <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>artinnovations@aol.com</Typography>
                <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>732-356-5087</Typography>
              </div>
            </div>
          </Grid>
          {/* <div style={styles.divider}></div> */}
          <Grid item xs={4} style={{ ...styles.section, flexBasis: '33.33%', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
              {/* <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>Pricing is based on your specific requirements. </Typography>
              <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>Please contact me for more information.</Typography> */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;