import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import itemData from "./itemdata.js";
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import Fade from 'react-reveal/Fade';

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

const CommercialWindowArt = ({handleClick}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const imageCount = images.length;
    let loadedCount = 0;

    const handleImageLoaded = () => {
      loadedCount++;
      if (loadedCount === imageCount) {
        setImagesLoaded(true);
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        handleImageLoaded();
      } else {
        image.addEventListener('load', handleImageLoaded);
      }
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener('load', handleImageLoaded);
      });
    };
  }, []);

  if (!imagesLoaded) {
    return null; // or a loading spinner, message or any other loading indicator
  }

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <div id="Commercial" style={styles.container}>
        <Fade timeout={3000}>
          <h2 style={styles.h2}>Commercial Window Art</h2>
          <h3 className="h3Description" style={styles.h3}>
            Commercial Window Art is a highly effective way to create an eye-catching focal point that draws customers into your business. Each window is a 'work of art' in its own right, and as such, Commercial Window Art is custom-designed for your business, utilizing color and imagination to entice customers to your front door. With the ability to create seasonal or permanent works, your business can maintain a fresh and exciting window scene that's sure to catch the eye of passersby. As an experienced professional, I take great pride in maintaining my seasonal work throughout the year, ensuring that your window art always looks its best.
          </h3>
          <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('Contact'); }}>Contact us</Button>
          </Fade>
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
          {isOpen && (
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

export default CommercialWindowArt;