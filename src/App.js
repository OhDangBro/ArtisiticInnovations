import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/hero';
import NavBar from './components/navbar';
import Footer from './components/footer';
import ArtisticInnovations from './components/artisticinnovations';
import Murals from './components/murals';
import CommercialWindowArt from './components/commercialwindowart';
import Custom from './components/customandcommercial';
import ContactInfo from './components/contact';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import NotFound from './components/NotFound';

const styles = {
  container: {
    minHeight: '100vh',
    minWidth: '100vw',
    position: 'relative',
    overflow: 'hidden',
    backgroundSize: '100% 100%'
  },
  hero: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '39vh',
  },
  navBarContainer: {
    position: 'relative',
    top: '-5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navBar: {
    top: '100%',
    left: 0,
  },
  artisticInnovations: {
    marginTop: '0em',
    paddingBottom: '4em',
  },
  footer: {
    paddingTop: '2em',
    marginTop: '2em',
  },
  contentStyle: {
    minHeight: '100vh',
    backgroundColor: '#f2f2f2',
    padding: '2rem',
  },
  backgroundContainer: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio (9 / 16 * 100)
    height: 0,
    overflow: 'hidden',
    backgroundColor: '#f2f2f2',
  },
};

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  
  const LoadingScreen = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        position: 'absolute',
        zIndex: 1000,
      }}
    >
      <CircularProgress />
    </div>
  );


  return (
    <BrowserRouter>
      <div id='Main' style={styles.container}>
        <div style={styles.navBarContainer}>
          <Hero style={styles.hero} />
          <div style={styles.navBar}>
            <NavBar handleClick={handlePageChange}/>
            <Divider className="navDivider" variant="middle" sx={{ position: 'relative', top: '-3vh', width: '95%', borderTop: '1px solid rgba(0,0,0,1)' }} />
          </div>
        </div>
        <div style={styles.artisticInnovations}>
        <Routes>
    <Route path="/" element={<ArtisticInnovations currentPage={currentPage} handleClick={handlePageChange} style={styles.contentStyle} />} />
    <Route path="/murals" element={<Murals handleClick={handlePageChange} style={styles.contentStyle} />} />
    <Route path="/commercial-window-art" element={<CommercialWindowArt handleClick={handlePageChange} style={styles.contentStyle} />} />
    <Route path="/custom" element={<Custom handleClick={handlePageChange} style={styles.contentStyle} />} />
    <Route path="/contact" element={<ContactInfo handleClick={handlePageChange} style={styles.contentStyle} />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
        </div>
        <div style={styles.footer}>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
  };

  export default App;
