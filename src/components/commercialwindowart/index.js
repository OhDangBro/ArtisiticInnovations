import React from 'react';
import { Button } from '@material-ui/core';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import itemData from "./itemdata.js"

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: "5%"
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
    margin: '2em 0',
    width: '40%',
    flexDirection: 'row',
  },



};



const CommercialWindowArt = ({handleClick}) => {
  return (
        <React.Fragment>
          <Container maxWidth="xl">
            <div style={styles.container}>
              <h2 className="h2Header" style={styles.h2}>Commercial Window Art</h2>
              <h3 className="h3Description" style={styles.h3}>
              Commercial Window Art is a highly effective way to create an eye-catching focal point that draws customers into your business. Each window is a 'work of art' in its own right, and as such, Commercial Window Art is custom-designed for your business, utilizing color and imagination to entice customers to your front door. With the ability to create seasonal or permanent works, your business can maintain a fresh and exciting window scene that's sure to catch the eye of passersby. As an experienced professional, I take great pride in maintaining my seasonal work throughout the year, ensuring that your window art always looks its best.              </h3>
              <div style={styles.imageContainer}></div>
              <Box className="imageList" sx={{ width: 900, minHeight: 400 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
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
  }}
/>
          </div>
        ))}
      </Masonry>
    </Box>
    <Button variant="contained" color="primary" style={styles.button}  onClick={() => { handleClick('Contact'); }}>Contact us</Button>

</div>
</Container>
</React.Fragment>

);
};

export default CommercialWindowArt;


