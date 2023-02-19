import React from 'react';
import Container from '@mui/material/Container';
import { Button } from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from './itemdata';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '2em',
    color: 'black',
  },
  h2: {
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '1em 0',
  },
  h3: {
    fontSize: '1.2em',
    textAlign: 'center',
    margin: '1em 0',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '2em 0',
    width: "100%"
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


const Murals = () => {
  return (
    <React.Fragment> 
    <Container maxWidth="xl">
    <div style={styles.container}>
      <h2 style={styles.h2}>Murals</h2>
      <h3 style={styles.h3}>
      Mural painting is applied to a wall surface, and therefore is a medium on a spectrum between fine art and house painting.  Each mural is unique and original and is custom designed to capture architecture & atmosphere, color and design. Murals express ideas, thoughts, imagination and emotions!
      </h3>
      <div style={styles.imageContainer}>
      <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </div>
      <Button variant="contained" color="primary" style={styles.button}>Book</Button>
    </div>
    </Container>
    </React.Fragment>
  );
};

export default Murals;