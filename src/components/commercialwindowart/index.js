import React from 'react';
import { Button } from '@material-ui/core';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import itemData from "./itemdata.js"
import NavBar2 from '../navbar2/index.js';

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
    margin: '2em 0',
    width: '40%',
    flexDirection: 'row',
  },


};

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const CommercialWindowArt = () => {
  return (
        <React.Fragment>
          <NavBar2/>
          <Container maxWidth="xl">
            <div style={styles.container}>
              <h2 style={styles.h2}>Commercial Window Art</h2>
              <h3 style={styles.h3}>
              Commercial Window Art creates an attractive focal point while drawing customers into your place of business.  Since each window is a  'work of art' in and of itself, Commercial Window Art is uniquely created for your business to bring customers to your front door by the use of color and imagination!   My work can be seasonal so that my customer can keep a fresh and exciting window scene, or it can be permanent and long lasting.  (I maintain my seasonal work throughout the year)
              </h3>
              <div style={styles.imageContainer}></div>
              <Box sx={{ width: 900, minHeight: 829 }}>
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
    <Button variant="contained" color="primary" style={styles.button}>Book</Button>

</div>
</Container>
</React.Fragment>

);
};

export default CommercialWindowArt;


