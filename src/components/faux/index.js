import React from 'react';
import { Button } from '@material-ui/core';
import Container from '@mui/material/Container';
import itemData from "./itemdata.js";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  h2: {
    fontSize: '2em',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'segoeFont',
  },
  h3: {
    fontSize: '1.2em !important',
    textAlign: 'center',
    margin: '1em 0',
    width: "90%",
    fontFamily: 'segoeFont',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em 0',
    width: '70vw',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    display: 'block',
    width: 'calc(20% - 4px)',
    margin: '2px',
    cursor: 'pointer',
  },
  button: {
    backgroundColor: 'hsl(274deg 53% 63%)',
    color: 'white',
    padding: '0.5em 1em',
    borderRadius: '2em',
    border: 'none',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '2em',
    fontFamily: 'segoeFont',
    fontWeight: 'bold',
    fontSize: '1em',
    textTransform: 'none',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'hsl(274deg 53% 50%)',
      color: 'blue',
    },
  }
};

const FauxFinishes = ({handleClick}) => {

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <div id="Commercial" style={styles.container}>
          <h2 style={styles.h2}>
            Also See Faux Finishes:
          </h2>
          <h3  style={styles.h3}>
            "The word faux, derived from French, literally means 'false' and in the context of decorative painting, it refers to the technique of creating realistic finishes on surfaces that mimic other materials such as marble, wood, leather, and stone. This artistic approach allows for the transformation of plain and unremarkable surfaces into stunning and sophisticated works of art. Some examples of popular faux finishes include wood, linen texture, ragging, distressed, sponge painting, and granite finish. These simple techniques can not only add warmth and character to a room, but also improve the appearance of aging walls and hide imperfections, goodbye fingerprints."
          </h3>
          <Button variant="contained" color="primary" style={styles.button} onClick={() => { handleClick('Contact'); }}>
            Contact us
          </Button>
          <div style={styles.imageContainer}>
            {itemData.map((item, index) => (
              <img
                key={index}
                src={`${item.img}?w=200&auto=format`}
                srcSet={`${item.img}?w=200&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={styles.img}
              />
            ))}
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default FauxFinishes;