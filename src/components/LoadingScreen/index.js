import { Typography } from '@material-ui/core';
import React from 'react';
import LoadingBrush from '../../assets/images/Brush';
import Bounce from 'react-reveal/Bounce';



const styles = {
  container: {
    position: 'fixed', // Add this line to make the position fixed
    zIndex: 9999, // Add this line to ensure it's on top of other elements
    minHeight: '100vh',
    minWidth: '100vw',
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
      <div style={{ display: 'flex' }}>
        <Bounce delay={100}>
          <Typography variant="h6" style={styles.text}>i</Typography>
        </Bounce>
        <Bounce delay={400}>
          <Typography variant="h6" style={styles.text}>n</Typography>
        </Bounce>
        <Bounce delay={700}>
          <Typography variant="h6" style={styles.text}>n</Typography>
        </Bounce>
        <Bounce delay={1000}>
          <Typography variant="h6" style={styles.text}>o</Typography>
        </Bounce>
        <Bounce delay={1300}>
          <Typography variant="h6" style={styles.text}>v</Typography>
        </Bounce>
        <Bounce delay={1600}>
          <Typography variant="h6" style={styles.text}>a</Typography>
        </Bounce>
        <Bounce delay={1900}>
          <Typography variant="h6" style={styles.text}>t</Typography>
        </Bounce>
        <Bounce delay={2200}>
          <Typography variant="h6" style={styles.text}>i</Typography>
        </Bounce>
        <Bounce delay={2500}>
          <Typography variant="h6" style={styles.text}>o</Typography>
        </Bounce>
        <Bounce delay={2800}>
          <Typography variant="h6" style={styles.text}>n</Typography>
        </Bounce>
        <Bounce delay={3100}>
          <Typography variant="h6" style={styles.text}>s</Typography>
        </Bounce>
      </div>
    </div>
  );
};

export default LoadingScreen;

