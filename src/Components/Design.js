import React from 'react';
import './Design.css'; 
import mainImage from './images/img34.jpg'; 
import featureImage1 from './images/img30.jpg'; 
import featureImage2 from './images/img38.jpg';
import featureImage3 from './images/img39.JPEG';

const Design = () => {
  return (
    <div className="design" style={{ backgroundImage: `url(${mainImage})` }}>
      <div className="overlay" /> {/* Overlay div added */}
      <div className="main-card">
        <h2>Our Potential Designs</h2>
        <p className="description">
          Discover our curated collection of beautifully crafted stone tables. Each piece is designed to blend 
          style with functionality, adding an elegant touch to any space.
        </p>

        <div className="inner-cards">
          <div className="inner-card">
            <img src={featureImage1} alt="Feature 1" className="feature-image" />
            <div className="feature-note">
              <h3>Feature 1</h3>
              <p>Timeless elegance with a high-quality finish.</p>
            </div>
          </div>
          <div className="inner-card">
            <img src={featureImage2} alt="Feature 2" className="feature-image" />
            <div className="feature-note">
              <h3>Feature 2</h3>
              <p>Durable designs crafted for every setting.</p>
            </div>
          </div>
          <div className="inner-card">
            <img src={featureImage3} alt="Feature 3" className="feature-image" />
            <div className="feature-note">
              <h3>Feature 3</h3>
              <p>Complements both modern and classic interiors.</p>
            </div>
          </div>
        </div>
        <button 
          className="explore-button" 
          onClick={() => window.location.href = '/designs'}
        >
          Explore More Designs
        </button>
      </div>
    </div>
  );
};

export default Design;
