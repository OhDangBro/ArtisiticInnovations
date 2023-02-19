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
};

const Hero = () => {
  return (
    <div style={styles.container}>
      <Typography variant="h1" style={styles.header}>
        Artistic Innovations
      </Typography>

    </div>
  );
};

export default Hero;