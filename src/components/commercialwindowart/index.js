import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Container from '@mui/material/Container';
import Masonry from '@mui/lab/Masonry';
import itemData from "./itemdata.js";
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import Fade from 'react-reveal/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import styles from './styles'; // Import styles

const CommercialWindowArt = ({handleClick}) => {
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
        <Fade timeout={3000}>
          <h2 style={styles.h2}>
            Commercial Window Art
          </h2>
          <h3 className="h3Description" style={styles.h3}>
          Commercial Window Art is a highly effective way to create an eye-catching focal point that draws customers into your business. Each window is a 'work of art' in its own right, and as such, Commercial Window Art is custom-designed for your business, utilizing color and imagination to entice customers to your front door. With the ability to create seasonal or permanent works, your business can maintain a fresh and exciting window scene that's sure to catch the eye of passersby. As an experienced professional, I take great pride in maintaining my seasonal work throughout the year, ensuring that your window art always looks its best.
          </h3>
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


