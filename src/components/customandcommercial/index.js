import React from 'react';
import { Button } from '@material-ui/core';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from './itemdata';
import Box from '@material-ui/core/Box';


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
  h4: {
    fontSize: '1em',
    textAlign: 'center',
    margin: '1em 0',
  }




};

const CustomAndCommercial = ({handleClick}) => {
  return (
        <React.Fragment>
          <Container maxWidth="xl">
            <div style={styles.container}>
              <h2 className="h2Header" style={styles.h2}>Custom Art</h2>
              <h3 className="h3Description" style={styles.h3}>
              Custom Painting is a powerful medium that can be used to express your individualism and unique sense of self through the use of design and color. Whether it's a small piece of artwork in a room or a large-scale mural, custom painting can truly personalize a space and make it your own. This is especially true for children's rooms, where a personalized touch can help foster creativity and imagination. By working closely with you, I can help match your decor with your own unique vision, while incorporating your needs with creative flair. The end result is a one-of-a-kind piece that truly reflects your individuality and brings your creative vision to life.
              </h3>
              <div style={styles.imageContainer}>
              <ImageList className='imageList' sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
</div>
<Box sx={{ backgroundColor: '#F5F5F5', padding: '2em', marginTop: '2em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
<div style={styles.container}>
              <h3 style={styles.h3}>Also See Faux Painting Finishes:</h3>
              <h3 className="h3Description" style={styles.h4}>
              "The word faux, derived from French, literally means 'false' and in the context of decorative painting, it refers to the technique of creating realistic finishes on surfaces that mimic other materials such as marble, wood, leather, and stone. This artistic approach allows for the transformation of plain and unremarkable surfaces into stunning and sophisticated works of art. Some examples of popular faux finishes include crackling, linen texture, ragging, distressed, sponge painting, and granite finish. These simple techniques can not only add warmth and character to a room, but also improve the appearance of aging walls and hide imperfections like fingerprints."              </h3>
              <div style={styles.imageContainer}>
              <ImageList className='imageList' sx={{ width: 400, height: 350 }} cols={2} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
</div>
</div>
</Box>
<Button variant="contained" color="primary" style={styles.button}  onClick={() => { handleClick('Contact'); }}>Contact us</Button>            
</div>
          </Container>
        </React.Fragment>
  );
};

export default CustomAndCommercial;