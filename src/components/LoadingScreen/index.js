import React from 'react';
import LoadingBrush from '../../assets/images/Brush';

const styles = {
  container: {
    minHeight: '100%',
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
    backgroundColor: 'hsl(274deg 53% 63%)',
  },
  spinner: {
    color: '#ffffff',
  },
};

const LoadingScreen = () => {
  return (
    <div style={styles.container}>
      <LoadingBrush style={styles.spinner} />
    </div>
  );
};

export default LoadingScreen;
