import React from 'react';
import { Container, Grid, Paper, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import muralHome from "../../assets/images/murals/muralThree.png";
import windowArtHome from "../../assets/images/windowArt/windowArtSeventeen.jpg";
import customHome from  "../../assets/images/custom/customNine.jpg";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
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
    width: '100%',
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
  '@media (max-width: 800px)': {
    container: {
      padding: '1em',
    },
    '.MuiGrid-container': {
      flexDirection: 'column',
    },
    image: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '300px',
      maxHeight: '300px',
      width: 'auto',
      height: 'auto',
      margin: '1em 0',
    },
    text: {
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '90%',
      margin: '1em 0',
    },
    h2: {
      fontSize: '2.2em',
    },
    h3: {
      fontSize: '1.2em',
      paddingBottom: "2%",
    },
    h4: {
      fontSize: '2.5em',
    },
    p: {
      fontSize: '1.2em',
    },
    button: {
      fontSize: '1em',
    },
    
  },
};

const ArtisticInnovations = ({ handleClick }) => {
  const isMobile = useMediaQuery('(max-width:800px)');
  return (
    <React.Fragment> 
      <Container maxWidth="xl" id="Landing">
        <div style={styles.container}>
        <Fade>

          <h2 style={styles.h2}>Custom Design & Painting Services</h2>
         
        
          <h3 style={styles.h3}>
            "Bringing 30 years of expertise in custom design painting to your walls, we specialize in creating stunning wall
            murals, custom pieces, both large and small, faux finishes, and window art for residential and commercial properties - inside and out."
          </h3>
       
</Fade>
          <Divider variant="middle" sx={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.2)' }} className="divider" />
<br></br>
          <div className="homeGrid">
          <Grid className="homeContainer reverseColumn" container spacing={2} >
          <Grid item xs={12} sm={6}>
  <Item>
    <div style={{ ...styles.text, textAlign: isMobile ? 'center' : 'left' }}>
    <Slide left>

      <h4 style={styles.h4}>Murals</h4>
      <p  style={styles.p}>Mural painting is a distinctive art form that blends the line between fine art and house painting. As a medium that's applied directly to a wall surface, each mural is uniquely
        crafted and custom designed to capture the essence of a particular space. </p>
      <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('Murals'); }}>See more</Button>
      </Slide>
    </div>
  </Item>
</Grid>
            <Grid item xs={12} sm={6}>
              <Slide right>
              <Item>   
                <div className="imageMargin" style={styles.image}>
                  <img src={muralHome} alt="custom artistic mural painting" style={{ width: '400px', height: '400px' }} />
                </div>
              </Item>
              </Slide>
            </Grid>
            </Grid>
            <Divider variant="middle" sx={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.2)' }} className="divider" />
            <Grid container spacing={2} className="homeGrid">
            <Grid item xs={12} sm={6}>
            <Slide left>
              <Item>
                <div className="homeMiddleImage imageMargin" style={styles.image}>
                  <img src={windowArtHome} alt="custom commercial window art painting" style={{ width: '400px', height: '400px' }} />
                </div>
              </Item>
              </Slide>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Slide right>
              <Item>
                <div className="homeMiddleText" style={styles.text}>
                  <h4 style={styles.h4}>Commercial Window Art</h4>
                  <p style={styles.p}>Commercial Window Art is a highly effective way to create an eye-catching focal point that draws customers into your business. Each window is a 'work of art' in its own right, and as such, Commercial Window Art is custom-designed for your business, utilizing color and imagination to entice customers to your front door.</p>
                  <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('CommercialWindowArt'); }}>See more</Button>
                </div>
              </Item>
              </Slide>
            </Grid>
            </Grid>
            <Divider variant="middle" sx={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.2)' }} className="divider"  />
            <Grid container spacing={2} className="homeGrid reverseColumn">
            <Grid item xs={12} sm={6}>
            <Slide left>
              <Item>
                <div className="homeMiddleText"  style={styles.text} >
                  <h4 style={styles.h4}>Custom</h4>
                  <p style={styles.p}>Custom Painting is a powerful medium that can be used to express your individualism and unique sense of self through the use of design and color. Whether it's a small piece of artwork in a room or a large-scale mural, custom painting can truly personalize a space and make it your own. This is especially true for children's rooms, where a personalized touch can help foster creativity and imagination. </p>
                  <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('Custom'); }}>See more</Button>
                </div>
              </Item>
              </Slide>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Slide right>

              <Item>
                <div style={styles.image} className="imageMargin">
                  <img  src={customHome} alt="custom artistic mural painting" style={{ width: '400px', height: '400px' }} />
                  </div>
                  </Item>
                  </Slide>
                  </Grid>
        </Grid>
        </div>
      </div>
    </Container>
  </React.Fragment>

  );
};

export default ArtisticInnovations;