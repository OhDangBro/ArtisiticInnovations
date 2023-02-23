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

const Murals = ({ handleClick }) => {
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
            Murals
          </h2>
          <h3 className="h3Description" style={styles.h3}>
            Mural painting is a distinctive art form that blends the line between fine art and house
            painting. As a medium that's applied directly to a wall surface, each mural is uniquely
            crafted and custom designed to capture the essence of a particular space. The result is a
            stunning visual representation of architecture, atmosphere, color, and design that
            expresses a range of ideas, thoughts, imagination, and emotions. With murals, you have
            the opportunity to bring your space to life in a way that's both creative and
            transformative.
          </h3>
          <div style={styles.imageContainer}>
          <ImageList
  sx={{ width: 1000, height: 550 }}
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

export default Murals;