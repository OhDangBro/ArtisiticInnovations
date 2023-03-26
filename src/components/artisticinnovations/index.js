import React from 'react';
import { Container, Grid, Paper, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import muralHome from "../../assets/images/murals/muralThree.png";
import windowArtHome from "../../assets/images/windowArt/windowArtSeventeen.jpg";
import customHome from "../../assets/images/custom/customNine.jpg";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import styles from './styles'; // Import styles

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: "none"
}));

const ArtisticInnovations = ({ handleClick }) => {
  const isMobile = useMediaQuery('(max-width:800px)');

  const handleButtonClick = (section) => {
    handleClick(section);
    window.scrollTo(0, 0);
  };


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
            <Grid className="homeContainer reverseColumn" container spacing={1} >
              <Grid item xs={12} sm={6}>
                <Item>
                  <div style={{ ...styles.text, textAlign: isMobile ? 'center' : 'left' }}>
                    <Slide left>
                      <h4 style={styles.h4}>Murals</h4>
                      <p style={styles.p}>Mural painting is a distinctive art form that blends the line between fine art and house painting. As a medium that's applied directly to a wall surface, each mural is uniquely
                        crafted and custom designed to capture the essence of a particular space. </p>
                      <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleButtonClick('Murals'); }}>See more</Button>
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
                      <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleButtonClick('CommercialWindowArt'); }}>See more</Button>
                    </div>
                  </Item>
                </Slide>
              </Grid>
            </Grid>
            <Divider variant="middle" sx={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.2)' }} className="divider" />
            <Grid container spacing={2} className="homeGrid reverseColumn">
              <Grid item xs={12} sm={6}>
                <Slide left>
                  <Item>
                    <div style={{ ...styles.text, textAlign: isMobile ? 'center' : 'left' }}>
                      <Slide left>

                        <h4 style={styles.h4}>Custom</h4>
                        <p style={styles.p}>Custom Painting is a powerful medium that can be used to express your individualism and unique sense of self through the use of design and color. Whether it's a small piece of artwork in a room or a large-scale mural, custom painting can truly personalize a space and make it your own. This is especially true for children's rooms, where a personalized touch can help foster creativity and imagination.</p>
                        <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleButtonClick('Custom'); }}>See more</Button>
                      </Slide>
                    </div>
                  </Item>
                </Slide>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Slide right>

                  <Item>
                    <div style={styles.image} className="imageMargin">
                      <img src={customHome} alt="custom artistic mural painting" style={{ width: '400px', height: '400px' }} />
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