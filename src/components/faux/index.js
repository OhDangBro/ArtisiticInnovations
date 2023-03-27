import React, { useState, useEffect } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import Container from '@mui/material/Container';
import Masonry from '@mui/lab/Masonry';
import itemData from "./itemdata.js";
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import Fade from 'react-reveal/Fade';
import styles from "./styles";

const FauxFinish = ({handleClick}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = itemData[0].img;
    img.onload = () => {
      setImagesLoaded(true);
    };
  }, []);


  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <div id="Commercial" style={styles.container}>
          <Fade timeout={3000}>
            <h2 style={styles.h2}>Also See Faux Finishes:</h2>
            <h3 className="h3Description" style={styles.h3}>"The word faux, derived from French, literally means 'false' and in
              the context of decorative painting, it refers to the technique of
              creating realistic finishes on surfaces that mimic other materials
              such as marble, wood, leather, and stone. This artistic approach
              allows for the transformation of plain and unremarkable surfaces
              into stunning and sophisticated works of art. Some examples of
              popular faux finishes include wood, linen texture, ragging,
              distressed, sponge painting, and granite finish. These simple
              techniques can not only add warmth and character to a room, but
              also improve the appearance of aging walls and hide imperfections,
              goodbye fingerprints."</h3>
              <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('Contact'); }}>
              Contact us
            </Button>
          </Fade>
        </div>
        {imagesLoaded ? (
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
                      width: '90%',
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
        {isOpen && imagesLoaded && (
          <Lightbox
            mainSrc={itemData[photoIndex].img}
            nextSrc={itemData[(photoIndex + 1) % itemData.length].img}
            prevSrc={itemData[(photoIndex + itemData.length - 1) % itemData.length].img}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + itemData.length - 1) % itemData.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % itemData.length)}
          />
        )}
      </Container>
    </React.Fragment>
  );
};

export default FauxFinish;