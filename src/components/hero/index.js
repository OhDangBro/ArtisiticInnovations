import React from 'react';
import { Typography } from '@material-ui/core';
import HeroImage from "../../assets/images/IMG_4963.jpg"
import ArtisticInnovationsLogo from '../../assets/images/artisticinnovations.png';

const styles = {
  container: {
    height: '50vh',
    width: '110%',
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: '#F5F5F5',
    backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${HeroImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginTop: '10%',
  },
  header: {
    fontWeight: 'bold',
    fontSize: '3.5em',
    color: 'black',
    marginBottom: '0.5em',
    textAlign: 'center',
    position: 'absolute', // make the header position absolute
    top: '70%', // position the header below the logo
    left: '50%',
    transform: 'translate(-50%, -50%)', // center the header
  },
  logo: {
    margin: 'auto',
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
  },
};

const Hero = () => {
  return (
    <div style={styles.container}>
      <img src={ArtisticInnovationsLogo} alt="Artistic Innovations Logo" style={styles.logo} />
      <Typography variant="h1" style={styles.header}>
        artistic innovations
      </Typography>
    </div>
  );
};

export default Hero;
