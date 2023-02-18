import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import muralOne from "../../assets/images/muralImages/muralOne.jpeg"
import muralTwo from "../../assets/images/muralImages/muralTwo.jpeg"
import muralThree from "../../assets/images/muralImages/muralThree.jpeg"
import muralFour from "../../assets/images/muralImages/muralFour.jpeg"
import muralFive from "../../assets/images/muralImages/muralFive.jpeg"
import muralSix from "../../assets/images/muralImages/muralSix.jpeg"
import muralSeven from "../../assets/images/muralImages/muralSeven.jpeg"
import muralEight from "../../assets/images/muralImages/muralEight.jpeg"
import muralNine from "../../assets/images/muralImages/muralNine.jpeg"
import Container from '@mui/material/Container';
import { Button } from '@material-ui/core';


const images = [muralOne, muralTwo, muralThree, muralFour, muralFive, muralSix, muralSeven, muralEight, muralNine];

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

const Murals = () => {
  return (
    <React.Fragment> 
    <Container maxWidth="xl">
    <div style={styles.container}>
      <h2 style={styles.h2}>Murals</h2>
      <h3 style={styles.h3}>
      Mural painting is applied to a wall surface, and therefore is a medium on a spectrum between fine art and house painting.  Each mural is unique and original and is custom designed to capture architecture & atmosphere, color and design. Murals express ideas, thoughts, imagination and emotions!
      </h3>
      <div style={styles.imageContainer}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1, 200: 2, 300: 3 }} style={{ width: "25%" }}>
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

export default Murals;