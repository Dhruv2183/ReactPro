import React, { useEffect } from 'react';
import Background from './Background';
import Footer from './Footer'; 
import Header from './Header'; 
import Nav from './Nav'; 
import Design from './Design';
import StoneTableCards from './StoneTableCards';
import Collection from './Collection'; 
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary
import './Nav.css';

const Main = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link); // Clean up the link on component unmount
    };
  }, []);

  return (
    <div style={{ position: 'relative', margin: 0 }}>
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <Background />
        <Header />
        <Nav />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <StoneTableCards />
        </div>
      </div>
      <div id="collection" style={{ margin: 0, padding: 0, backgroundColor: '#f9f9f9' }}>
        <ErrorBoundary>
          <Collection />
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary>
          <Design />
        </ErrorBoundary>
      </div>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Main;


