import React, { useState } from 'react';
import './App.css';
import Hero from './components/hero';
import NavBar from './components/navbar';
import Footer from './components/footer';
import ArtisticInnovations from './components/artisticinnovations';
import Murals from './components/murals';
import CommercialWindowArt from './components/commercialwindowart';
import CustomAndCommercial from './components/customandcommercial';
import ContactInfo from './components/contact';
import Divider from '@mui/material/Divider';



const styles = {
  container: {
    minHeight: '100vh',
    minWidth: '100vw',
    position: 'relative',
  },
  hero: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '39vh', // adjust the height to your preference
  },
  navBarContainer: {
    position: 'relative',
    top: '-5em', // adjust the top value to move the navbar down
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navBar: {
    top: '100%',
    left: 0,
  },
  artisticInnovations: {
    marginTop: '3em', // add margin to move the content below the navbar
    paddingBottom: '4em', // add padding to make room for the footer
  },
  footer: {
    paddingTop: '2em', // add the desired margin value here
    marginTop: '2em', // add the desired margin value here
  },
}

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const renderPage = () => {
   
    if (currentPage === "Home") {
      return <ArtisticInnovations currentPage={currentPage} handleClick={handlePageChange}/>;
    }
    if (currentPage === "Murals") {
      return <Murals handleClick={handlePageChange}  />;
    }
    if (currentPage === "CommercialWindowArt") {
      return <CommercialWindowArt handleClick={handlePageChange}  />;
    }
    if (currentPage === "Custom") {
      return <CustomAndCommercial handleClick={handlePageChange}  />;
    }
    if (currentPage === "Contact") {
      return <ContactInfo handleClick={handlePageChange}  />;
    }
  };

  return (
      <div id='Main' style={styles.container}>
        <div style={styles.navBarContainer}>
        <Hero style={styles.hero} />
          <div style={styles.navBar}>
          <NavBar handleClick={handlePageChange}/>
<Divider className="navDivider" variant="middle" sx={{ position: 'relative', top: '-3vh', width: '95%', borderTop: '1px solid rgba(0,0,0,1)' }} />
          </div>
        </div>
        <div style={styles.artisticInnovations}>
          <main id="Main">{renderPage()}</main>
        </div>
        <div style={styles.footer}>
          <Footer/>
        </div>
      </div>
    );
  };

export default App;