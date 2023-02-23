import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Button } from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from './itemdata';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5%',
  },
  h2: {
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '1em 0',
    fontFamily: 'Segoe',
    color: 'hsl(274deg 53% 63%)',
  },
  h3: {
    fontSize: '1.2em',
    textAlign: 'center',
    margin: '1em 0',
    width: '80%',
    
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '2em 0',
    width: '100%',
  },
  button: {
    margin: '2em 0',
  },
  // Media Query for Mobile Devices
  '@media (max-width: 767px)': {
    imageContainer: {
      margin: '1em 0',
      width: '90%',
    },
    button: {
      margin: '1em 0',
    },
  },
};

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const CustomAndCommercial = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <React.Fragment>
      <Container className="container" maxWidth="xl">
        <div id="Murals" style={styles.container}>
          <h2 className="h2Header" style={styles.h2}>
            Custom
          </h2>
          <h3 className="h3Description" style={styles.h3}>
          Custom Painting is a powerful medium that can be used to express your individualism and unique sense of self through the use of design and color. Whether it's a small piece of artwork in a room or a large-scale mural, custom painting can truly personalize a space and make it your own. This is especially true for children's rooms, where a personalized touch can help foster creativity and imagination. By working closely with you, I can help match your decor with your own unique vision, while incorporating your needs with creative flair. The end result is a one-of-a-kind piece that truly reflects your individuality and brings your creative vision to life.
          </h3>
          <div style={styles.imageContainer}>
          <ImageList
  sx={{ width: 1200, height: 550 }}
  variant="quilted"
  cols={4}
  rowHeight={121}
  gap={12}
>
  {itemData.map((item, index) => (
    <ImageListItem
      key={item.img}
      cols={item.cols || 1}
      rows={item.rows || 1}
      onClick={() => handleOpenLightbox(index)}
      style={{ cursor: 'pointer' }}
    >
      <img
        {...srcset(item.img, 121, item.rows, item.cols)}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
</div>
<Button
variant="contained"
color="primary"
style={styles.button}
onClick={() => {
handleClick('Contact');
}}
>
Contact us
</Button>
{isOpen && (
<Lightbox
mainSrc={itemData[photoIndex].img}
nextSrc={itemData[(photoIndex + 1) % itemData.length].img}
prevSrc={itemData[(photoIndex + itemData.length - 1) % itemData.length].img}
onCloseRequest={() => setIsOpen(false)}
onMovePrevRequest={() =>
  setPhotoIndex((photoIndex + itemData.length - 1) % itemData.length)
}
onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % itemData.length)}
/>
)}
</div>
</Container>
</React.Fragment>
  );
};

export default CustomAndCommercial;