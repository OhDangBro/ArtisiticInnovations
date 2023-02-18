import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ArtOne from '../../assets/images/artisticinnovatinsImages/artOne.jpeg';
import ArtTwo from '../../assets/images/artisticinnovatinsImages/artTwo.jpeg';
import ArtThree from '../../assets/images/artisticinnovatinsImages/artThree.jpeg';
import ArtFour from '../../assets/images/artisticinnovatinsImages/artFour.jpeg';
import Container from '@mui/material/Container';
import { Button } from '@material-ui/core';



const images = [ArtOne, ArtTwo, ArtThree, ArtFour];

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
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '2em 0',
    width: "100%"
  },
  image: {
    width: '100%',
    height: 'auto',
    margin: '1em',
    objectFit: 'cover',
    cursor: 'pointer',
    
  },
};

const ArtisticInnovations = () => {
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
      <div style={styles.imageContainer}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1, 200: 2 }} style={{ width: "25%" }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img key={i} src={image} style={styles.image} alt="" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Button variant="contained" color="primary" style={styles.button}>Book</Button>
    </div>
    </Container>
    </React.Fragment>
  );
};

export default ArtisticInnovations;