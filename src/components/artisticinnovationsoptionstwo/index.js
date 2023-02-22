import React from 'react';
import Container from '@mui/material/Container';
import { Button } from '@material-ui/core';
import { useMediaQuery } from '@mui/material';

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
    fontFamily: 'Segoe',
  },
  h2: {
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '1em 0',
    fontFamily: 'Segoe',
  },
  h3: {
    fontSize: '1.2em',
    textAlign: 'center',
    margin: '1em 0',
    fontFamily: 'Segoe',
  },
  imagesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2em',
    width: '100%',
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    margin: '10px 60px', // Add margin between imageWrappers
  },
  image: {
    width: '100%',
    maxWidth: '450px',
  },
  description: {
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2em',
  },
};

const ArtisticInnovationsTwo = ({ handleClick }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <div style={styles.container}>
          <header style={styles.header}>Artistic Innovations</header>
          <h2 style={styles.h2}>Custom Design & Painting Services</h2>
          <h3 style={styles.h3}>
            "Bringing 30 years of expertise in custom design painting to your walls, we specialize in creating stunning wall
            murals, faux finishes, and window art for both residential and commercial properties - both inside and out."
          </h3>
          
          <div style={styles.imagesContainer}>
          <span onClick={() => { handleClick('Murals'); }}>
            <div style={styles.imageWrapper}>
              <img style={styles.image} src="https://picsum.photos/300/200" alt="Image 1" />
              <h3>Murals</h3>
              <p style={styles.description}>Mural painting blends fine art and house painting to create unique, custom-designed wall art that captures the essence of a space. It expresses a range of ideas and emotions through stunning visual representation of architecture, color, and design. Murals offer a creative and transformative way to bring any space to life.</p>
            </div>
            </span>
            <span onClick={() => { handleClick('CommercialWindowArt'); }}>
            <div style={styles.imageWrapper}>
              <img style={styles.image} src="https://picsum.photos/300/200" alt="Image 1" />
              <h3>Commercial Window Art</h3>
              <p style={styles.description}>Commercial Window Art is a great way to attract customers to your business with custom-designed window displays that are visually appealing. They can be made for seasonal or permanent use, and are expertly crafted using color and imagination to entice potential customers. I take pride in maintaining the window art year-round to ensure it always looks its best. </p>
            </div>
            </span>
            <span onClick={() => { handleClick('CommercialWindowArt'); }}>
            <div style={styles.imageWrapper}>
              <img style={styles.image} src="https://picsum.photos/300/200" alt="Image 1" />
              <h3>Custom</h3>
              <p style={styles.description}>Custom Painting is a powerful way to express your unique self through design and color. It can personalize a space, big or small, and foster creativity and imagination, especially in children's rooms. I work closely with you to match your decor with your vision and needs, resulting in a one-of-a-kind piece that truly reflects your individuality and brings your creative vision to life.</p>
            </div>
            </span>
          </div>
          <div style={styles.buttonContainer}>
            <Button variant="contained" color="primary" onClick={() => { handleClick('Contact'); }}>Contact us</Button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ArtisticInnovationsTwo;
