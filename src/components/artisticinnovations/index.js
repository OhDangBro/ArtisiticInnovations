import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import { Button } from '@material-ui/core';
import itemData from './itemdata';
import { useMediaQuery } from '@mui/material';
import Hero from '../hero';




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
    color: 'hsl(274deg 53% 63%)',
    fontFamily: 'Segoe',
  },
  h2: {
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '1em 0',
    fontFamily: 'Segoe',
  },
  h3: {
    fontSize: '1.2em',
    textAlign: 'center',
    margin: '1em 0',
    fontFamily: 'Segoe',
  },

};

const ArtisticInnovations = ({handleClick}) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <React.Fragment> 
    <Container maxWidth="xl">
    <div style={styles.container}>
<Hero/>
      <h2 style={styles.h2}>Custom Design & Painting Services</h2>
      <h3 style={styles.h3}>
        "Bringing 30 years of expertise in custom design painting to your walls, we specialize in creating stunning wall
        murals, faux finishes, and window art for both residential and commercial properties - both inside and out."
      </h3>
      <div className="imageContainer" >
      <ImageList className="imageList" sx={{ width: 500, height: 450 }} variant="woven" cols={isMobile ? 2 : 3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </div>
      <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('Contact'); }}>Contact us</Button>    </div>
    </Container>
    </React.Fragment>
  );
};

export default ArtisticInnovations;