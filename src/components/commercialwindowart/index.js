import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import commercialOne from "../../assets/images/commercialImages/commercialOne.jpeg"
import commercialTwo from "../../assets/images/commercialImages/commercialTwo.jpeg"
import commercialThree from "../../assets/images/commercialImages/commercialThree.jpeg"
import commercialFour from "../../assets/images/commercialImages/commercialFour.jpeg"
import commercialFive from "../../assets/images/commercialImages/commercialFive.jpeg"
import commercialSix from "../../assets/images/commercialImages/commercialSix.jpeg"
import commercialSeven from "../../assets/images/commercialImages/commercialSeven.jpeg"
import commercialEight from "../../assets/images/commercialImages/commercialEight.jpeg"
import commercialNine from "../../assets/images/commercialImages/commercialNine.jpeg"
import Container from '@mui/material/Container';
import { Button } from '@material-ui/core';



const images = [commercialOne, commercialTwo, commercialThree, commercialFour, commercialFive, commercialSix, commercialSeven, commercialEight, commercialNine];

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

const CommercialWindowArt = () => {
  return (
    <React.Fragment> 
      <Container maxWidth="xl">
    <div style={styles.container}>
      <h2 style={styles.h2}>Commercial Window Art</h2>
      <h3 style={styles.h3}>
      Commercial Window Art creates an attractive focal point while drawing customers into your place of business.  Since each window is a  'work of art' in and of itself, Commercial Window Art is uniquely created for your business to bring customers to your front door by the use of color and imagination!   My work can be seasonal so that my customer can keep a fresh and exciting window scene, or it can be permanent and long lasting.  (I maintain my seasonal work throughout the year)      </h3>
      <div style={styles.imageContainer}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1, 200: 2, 300: 3 }} style={{ width: "40%" }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img key={i} src={image} style={styles.image} alt="" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
    </Container>
    </React.Fragment>
  );
};

export default CommercialWindowArt;