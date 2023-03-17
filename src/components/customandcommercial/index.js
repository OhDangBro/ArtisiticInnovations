import React, { useState } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import Container from '@mui/material/Container';
import Masonry from '@mui/lab/Masonry';
import itemData from "./itemdata.js";
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import FauxFinishes from '../faux/index.js';
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

const CustomAndCommercial = ({handleClick}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <React.Fragment>
      {imagesLoaded ? (
        <Container maxWidth="xl">
          <div id="Commercial" style={styles.container}>
            <Fade timeout={3000}>
              <h2 style={styles.h2}>
                Custom Art
              </h2>
              <h3 className="h3Description" style={styles.h3}>
                Custom Painting is a powerful medium that can be used to express your individualism and unique sense of self through the use of design and color on most any object. Whether it's a small piece of artwork in a room or a large-scale mural, custom painting can truly personalize a space and make it your own. This is especially true for children's rooms, where a personalized touch can help foster creativity and imagination. By working closely with you, I can help match your decor with your own unique vision, while incorporating your needs with creative flair. The end result is a one-of-a-kind piece that truly reflects your individuality and brings your creative vision to life.
              </h3>
              <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('Contact'); }}>
                Contact us
              </Button>
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
                      onLoad={handleImageLoad}
                    />
                  </div>
                ))}
              </Masonry>
            </div>
            {isOpen && (
              <Lightbox
                mainSrc={itemData[photoIndex].img}
                nextSrc={itemData[(photoIndex + 1)
                  % itemData.length].img}
                prevSrc={itemData[(photoIndex + itemData.length - 1) % itemData.length].img}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + itemData.length - 1) % itemData.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % itemData.length)}
              />
            )}
          </div>
          <FauxFinishes/>
        </Container>
      ) : (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <CircularProgress />
        </div>
      )}
    </React.Fragment>
  );
};

export default CustomAndCommercial;