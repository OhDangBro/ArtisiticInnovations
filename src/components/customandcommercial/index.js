import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Container from '@mui/material/Container';
import Masonry from '@mui/lab/Masonry';
import itemData from "./itemdata.js";
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import FauxFinishes from '../faux/index.js';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import styles from './styles'; // Import styles



const Custom = ({handleClick}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


return (
  <React.Fragment>
    <Container maxWidth="xl">
      <div id="Commercial" style={styles.container}>
        <Fade timeout={2000}>
          <h2 style={styles.h2}>
            Custom Art
          </h2>
          <h3 className="h3Description" style={styles.h3}>
            Custom Painting is a powerful medium that can be used to express your individualism and unique sense of self through the use of design and color on most any object. Whether it's a small piece of artwork in a room or a large-scale mural, custom painting can truly personalize a space and make it your own. This is especially true for children's rooms, where a personalized touch can help foster creativity and imagination. By working closely with you, I can help match your decor with your own unique vision, while incorporating your needs with creative flair. The end result is a one-of-a-kind piece that truly reflects your individuality and brings your creative vision to life.
          </h3>
          <Link to="/contact" style={{textDecoration: 'none'}}>
        <Button variant="contained" color="primary" style={styles.button}>
          Contact us
        </Button>
      </Link>
        </Fade>
       
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
      <FauxFinishes handleClick={handleClick} />
    </Container>
  </React.Fragment>
);
};

export default Custom;
