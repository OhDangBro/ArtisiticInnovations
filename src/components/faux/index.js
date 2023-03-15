import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Container from '@mui/material/Container';
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
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'segoeFont',
  },
  h3: {
    fontSize: '1.2em !important',
    textAlign: 'center',
    margin: '1em 0',
    width: "90%",
    fontFamily: 'segoeFont',
  },
  imageContainer: {
    margin: '2em 0',
    width: '70vw',
  },
  img: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    display: 'block',
    width: 'calc(33.3333% - 4px)',
    margin: '2px',
    cursor: 'pointer',
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

const FauxFinishes = ({handleClick}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <div id="Commercial" style={styles.container}>
          <Fade timeout={3000}>
          <h2 style={styles.h2}>Also See Faux Finishes:</h2>
          <h3 style={styles.h3}>
            "The word faux, derived from French, literally means 'false' and in the context of decorative painting, it refers to the technique of creating realistic finishes on surfaces that mimic other materials such as marble, wood, leather, and stone. This artistic approach allows for the transformation of plain and unremarkable surfaces into stunning and sophisticated works of art. Some examples of popular faux finishes include wood, linen texture, ragging, distressed, sponge painting, and granite finish. These simple techniques can not only add warmth and character to a room, but also improve the appearance of aging walls and hide imperfections, goodbye fingerprints."
          </h3>
          <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('Contact'); }}>
            Contact us
          </Button>
          </Fade>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2} style={styles.imageContainer}>
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
          
  export default FauxFinishes;