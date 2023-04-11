import { Typography } from '@material-ui/core';
import React from 'react';
import LoadingBrush from '../../assets/images/Brush';
import Pulse from 'react-reveal/Pulse';


const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(274deg 53% 63%)',
  },
  spinner: {
    color: '#ffffff',
  },
  text: {
    marginTop: '20px',
    textAlign: 'center',
    color: '#ffffff',
    animation: '$fade-in 1s ease-in-out',
    fontSize: '2.6em',
    fontWeight: 'bold',
    fontFamily: 'segoeFont',
  },
};

const LoadingScreen = () => {
  return (
    <div style={styles.container}>
      <LoadingBrush style={styles.spinner} />
      <Pulse>
      <Typography variant="h6" style={styles.text}>
        Brushing Up
      </Typography>
      </Pulse>
    </div>
  );
};

export default LoadingScreen;