import React, { useState, useEffect } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import Container from '@mui/material/Container';
import Masonry from '@mui/lab/Masonry';
import itemData from "./itemdata.js";
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import Fade from 'react-reveal/Fade';
import styles from './styles'; // Import styles
import { Link } from 'react-router-dom';



const Murals = ({handleClick}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  useEffect(() => {
    const loadedImages = itemData.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = `${item.thumbnail}?w=200&auto=format`;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(loadedImages)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



return (
  <React.Fragment>
    <Container maxWidth="xl">
      <div id="Commercial" style={styles.container}>
        <Fade timeout={2000}>
          <h2 style={styles.h2}>
           Murals
          </h2>
          <h3 className="h3Description" style={styles.h3}>
          Mural painting is a distinctive art form that blends the line between fine art and house painting.
            As a medium that's applied directly to a wall surface, each mural is uniquely crafted and custom designed to capture the essence of a particular space. The result is a stunning visual representation of architecture, atmosphere, color, and design that expresses a range of ideas, thoughts, imagination, and emotions. With murals, you have the opportunity to bring your space to life in a way that's both creative and transformative.           </h3>
            <Link to="/contact" style={{textDecoration: 'none'}}>
        <Button variant="contained" color="primary" style={styles.button}>
          Contact us
        </Button>
      </Link>
        </Fade>
        {imagesLoaded ? (
          <div style={styles.imageContainer}>
            <Masonry columns={3} spacing={2}>
              {itemData.map((item, index) => (
                <div key={index} onClick={() => { setPhotoIndex(index); setIsOpen(true); }}>
                  <img
                    src={item.thumbnail}
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
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress style={{ color: 'purple' }} />
          </div>
        )}
        {isOpen && (
          <Lightbox
          mainSrc={itemData[photoIndex].thumbnail}
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
