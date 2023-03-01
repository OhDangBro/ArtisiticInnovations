import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import itemData from "./itemdata.js";
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  h2: {
    fontSize: '2.6em',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'segoeFont',
  },
  h3: {
    fontSize: '1.4em',
    textAlign: 'center',
    margin: '1em 0',
    width: "90%"
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em 0',
    width: '90vw',
    flexDirection: 'row',
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
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'hsl(274deg 53% 50%)',
      color: 'blue',
    },
  }
  
};

const Murals = ({handleClick}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = itemData[0].img;
    img.onload = () => {
      setFirstImageLoaded(true);
    };
  }, []);

  
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <div id="Commercial" style={styles.container}>
<h2 style={styles.h2}>
Murals
</h2>
          <h3 className="h3Description" style={styles.h3}>
          Mural painting is a distinctive art form that blends the line between fine art and house painting.
As a medium that's applied directly to a wall surface, each mural is uniquely crafted and custom designed to capture the essence of a particular space. The result is a stunning visual representation of architecture, atmosphere, color, and design that expresses a range of ideas, thoughts, imagination, and emotions. With murals, you have the opportunity to bring your space to life in a way that's both creative and transformative. </h3>
          <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('Contact'); }}>Contact us</Button>

          <div style={styles.imageContainer}>
            <Masonry columns={3} spacing={2}>
              {itemData.map((item, index) => (
                <div key={index} onClick={() => { setPhotoIndex(index); setIsOpen(true); }}>
                  <img
                    src={`${item.img}?w=200&auto=format`}
                    srcSet={`${item.img}?w=200&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: 'block',
                      width: '100%',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              ))}
            </Masonry>
            </div>
            {isOpen && firstImageLoaded && (
            <Lightbox
              mainSrc={itemData[photoIndex].img}
              nextSrc={itemData[(photoIndex + 1) % itemData.length].img}
              prevSrc={itemData[(photoIndex + itemData.length - 1) % itemData.length].img}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() => setPhotoIndex((photoIndex + itemData.length - 1) % itemData.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % itemData.length)}
            />
          )}
          </div>
        </Container>
      </React.Fragment>

);
};

export default Murals;
