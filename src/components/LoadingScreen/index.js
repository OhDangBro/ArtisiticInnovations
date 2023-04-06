import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const styles = {
  container: {
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  spinner: {
    color: '#ffffff',
  },
};

const LoadingScreen = () => {
  return (
    <div style={styles.container}>
      <CircularProgress style={styles.spinner} />
    </div>
  );
};

export default LoadingScreen;
