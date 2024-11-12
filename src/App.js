


import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary';
import Loading from './Components/Loading';
import Main from './Components/Main';
import DesignPage from './pages/DesignPage';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';


const Products = lazy(() => import('./pages/Products'));

const NotFound = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  const location = useLocation();
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    
    if (location.pathname === "/" && shouldReload) {
      window.location.reload();
      setShouldReload(false); 
    }
  }, [location.pathname, shouldReload]);

 
  useEffect(() => {
    if (location.pathname === "/products") {
      setShouldReload(true);
    }
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/designs" element={<DesignPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};


const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;

