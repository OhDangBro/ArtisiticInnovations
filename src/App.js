import React, { useState } from 'react';
import './App.css';
import Hero from './components/hero';
import NavBar from './components/navbar';
import Footer from './components/footer';
import ArtisticInnovations from './components/artisticinnovations';
import Murals from './components/murals';
import CommercialWindowArt from './components/commercialwindowart';
import CustomAndCommercial from './components/customandcommercial';

const styles = {
  container: {
    minHeight: '100vh',
    position: 'relative',
  },
  hero: {
    height: '39vh', // adjust the height to your preference
  },
  navBarContainer: {
    position: 'relative',
    top: '-5em', // adjust the top value to move the navbar down
  },
  navBar: {
    position: 'absolute',
    top: '100%',
    left: 0,
    height: '100vh', // add this to make the navbar take up the full height of the screen
  },
  artisticInnovations: {
    marginLeft: '15vh',
    paddingBottom: '4em', // add padding to make room for the footer
  },
};

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
    if (currentPage === "CustomAndCommercial") {
      return <CustomAndCommercial handleClick={handlePageChange}  />;
    }
  };

  return (
    <div style={styles.container}>
      {/* <div style={styles.hero}>
        <Hero></Hero>
      </div> */}
      <div style={styles.navBarContainer}>
        <div style={styles.navBar}>
          <NavBar handleClick={handlePageChange}/>
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