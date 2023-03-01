import React from 'react';
import { Typography } from '@material-ui/core';
import HeroImage from "../../assets/images/hero.jpeg"
import ArtisticInnovationsLogo from '../../assets/images/artisticinnovations.png';

const styles = {
  container: {
    height: '40vh',
    width: '55%',
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: '#F5F5F5',
    backgroundImage: `linear-gradient(rgba(255,255,255,0.45), rgba(255,255,255,0.45)), url(${HeroImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginTop: '5%',
  },
  header: {
    fontWeight: 'bold',
    fontSize: '3.5em',
    color: 'black',
    marginBottom: '0.5em',
    textAlign: 'center',
    position: 'absolute', // make the header position absolute
    top: '60%', // position the header below the logo
    left: '50%',
    transform: 'translate(-50%, -50%)', // center the header
    fontFamily: "segoeFont"
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
    <div className="heroContainer" style={styles.container}>
      <img className="heroImage" src={ArtisticInnovationsLogo} alt="Artistic Innovations Logo" style={styles.logo} />
      <Typography className="heroFont" variant="h1" style={styles.header}>
        artistic innovations
        <br></br>
        Deborah Stair
      </Typography>
    </div>
  );
};

export default Hero;
