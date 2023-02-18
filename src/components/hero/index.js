import React from 'react';
import { Typography } from '@material-ui/core';

const styles = {
  container: {
    height: '30vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    backgroundImage: 'url("https://your-image-url-here.jpg")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  header: {
    fontWeight: 'bold',
    fontSize: '3em',
    color: 'black',
    textShadow: '2px 2px #FFFFFF',
    marginBottom: '0.5em',
    textAlign: 'center',
  },
  quote: {
    fontStyle: 'italic',
    fontSize: '1.5em',
    color: 'black',
    textShadow: '1px 1px #FFFFFF',
    textAlign: 'center',
  },
};

const Hero = () => {
  return (
    <div style={styles.container}>
      <Typography variant="h1" style={styles.header}>
        Artistic Innovations
      </Typography>
      <Typography variant="body1" style={styles.quote}>
      "The purpose of art is to make the invisible visible."       </Typography>
    </div>
  );
};

export default Hero;