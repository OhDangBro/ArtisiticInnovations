import React from 'react';
import Container from '@mui/material/Container';
import { Button } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';
import muralHome from "../../assets/images/murals/muralFive.jpg";
import windowArtHome from "../../assets/images/windowArt/windowArtThirteen.jpg";
import customHome from  "../../assets/images/custom/customOne.jpg";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '500px',
  width: '700px',
  boxShadow: "none"
}));

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '2em',
    color: 'hsl(274deg 53% 63%)',
    fontFamily: 'segoeFont',
  },
  h2: {
    fontSize: '3.2em',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'segoeFont',
  },
  h3: {
    fontSize: '1.4em',
    textAlign: 'center',
    margin: '1em 0',
    fontFamily: 'segoeFont',
    paddingBottom: "5%",
    width: "90%"
  },
  h4: {
    fontSize: '3em',
    margin: '1em 0',
    fontFamily: 'segoeFont',
    color: 'hsl(274deg 53% 63%)',
  },
  p: {
    fontSize: '1.6em',
    margin: '1em 0',
    fontFamily: 'segoeFont',
  },
  text: {
    marginRight: '1em',
    width: '100%',
    margin: '5em 0',
  },
  image: {
    marginLeft: '1em',
    maxWidth: '10vw%',
    maxHeight: '100%',
    width: '100%',
    margin: '5em 0',
  },
  button: {
    backgroundColor: 'hsl(274deg 53% 63%)',
    color: 'white',
    padding: '0.5em 1em',
    borderRadius: '2em',
    border: 'none',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '2em',
    fontFamily: 'segoeFont',
    fontWeight: 'bold',
    fontSize: '1em',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'hsl(274deg 53% 50%)',
    },
  },
      // Add a media query for smaller screens
      '@media (max-width: 1200px)': {
        container: {
          padding: '1em',
        },
        '.MuiGrid-container': {
          flexDirection: 'column',
        },
      },
};

const ArtisticInnovations = ({ handleClick }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <React.Fragment> 
      <Container maxWidth="xl">
        <div style={styles.container}>
          <h2 style={styles.h2}>Custom Design & Painting Services</h2>
          <h3 style={styles.h3}>
            "Bringing 30 years of expertise in custom design painting to your walls, we specialize in creating stunning wall
            murals, custom pieces, both large and small, faux finishes, and window art for both residential and commercial properties - both inside and out."
          </h3>
          <Grid container spacing={2} className="homeGrid">
            <Grid item xs={6}>
              <Item>     
                <div style={styles.text}>
                  <h4 style={styles.h4}>Murals</h4>
                  <p style={styles.p}>Mural painting is a distinctive art form that blends the line between fine art and house painting. As a medium that's applied directly to a wall surface, each mural is uniquely
                  crafted and custom designed to capture the essence of a particular space. </p>
                  <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('Murals'); }}>See more</Button>
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>   
                <div style={styles.image}>
                  <img src={muralHome} alt="custom artistic mural painting" style={{ width: '400px', height: '400px' }} />
                </div>
              </Item>
            </Grid>
            </Grid>
            <Divider variant="middle" sx={{ width: '120%', borderTop: '1px solid rgba(0,0,0,0.2)' }} />

            <Grid container spacing={2} className="homeGrid">
            <Grid item xs={6}>
              <Item>
                <div className="homeMiddleImage" style={styles.image}>
                  <img src={windowArtHome} alt="custom commercial window art painting" style={{ width: '400px', height: '400px' }} />
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <div className="homeMiddleText" style={styles.text}>
                  <h4 style={styles.h4}>Commercial Window Art</h4>
                  <p style={styles.p}>Commercial Window Art is a highly effective way to create an eye-catching focal point that draws customers into your business. Each window is a 'work of art' in its own right, and as such, Commercial Window Art is custom-designed for your business, utilizing color and imagination to entice customers to your front door.</p>
                  <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('CommercialWindowArt'); }}>See more</Button>
                </div>
              </Item>
            </Grid>
            </Grid>
            <Divider variant="middle" sx={{ width: '120%', borderTop: '1px solid rgba(0,0,0,0.2)' }} />
            <Grid container spacing={2} className="homeGrid">
            <Grid item xs={6}>
              <Item>
                <div style={styles.text}>
                  <h4 style={styles.h4}>Custom</h4>
                  <p style={styles.p}>Custom Painting is a powerful medium that can be used to express your individualism and unique sense of self through the use of design and color. Whether it's a small piece of artwork in a room or a large-scale mural, custom painting can truly personalize a space and make it your own. This is especially true for children's rooms, where a personalized touch can help foster creativity and imagination. </p>
                  <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('Custom'); }}>See more</Button>
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <div style={styles.image}>
                  <img src={customHome} alt="custom artistic mural painting" style={{ width: '400px', height: '400px' }} />
                  </div>
                  </Item>
                  </Grid>
        </Grid>
      </div>
    </Container>
  </React.Fragment>

  );
};

export default ArtisticInnovations;