import { Container, Grid, Typography } from '@material-ui/core';

const styles = {
  container: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '5vh',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTop: '1px solid black', // add this line to add a border to the top black line

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
};

const Footer = () => {
  return (
    <footer style={{...styles.container, width: "100vw"}} >
      <Container maxWidth="xl">
        <Grid container spacing={1} style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Grid item xs={4} style={{ ...styles.section, flexBasis: '33%', justifyContent: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>artinnovations.deborah@gmail.com</Typography>

            </div>
          </Grid>
          {/* <div style={styles.divider}></div> */}
          <Grid item xs={4} style={{ ...styles.section, flexBasis: '33.33%', justifyContent: 'center' }}>
            <div style={styles.contactInfo}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>Deborah Stair</Typography>
                <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>artistic innovations &copy; {new Date().getFullYear()}</Typography>

              </div>
            </div>
          </Grid>
          {/* <div style={styles.divider}></div> */}
          <Grid item xs={4} style={{ ...styles.section, flexBasis: '33.33%', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
            <Typography variant="body1" align="center" style={{ fontSize: '12px' }}>732-893-7440</Typography>

            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;