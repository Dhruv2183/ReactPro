import React, { useState, useEffect, useCallback } from 'react';
import './DesignPage.css';

import customImage1 from './images/img26.JPEG';
import customImage2 from './images/img27.JPEG';
import customImage3 from './images/img28.jpg';
import customImage4 from './images/img29.jpg';
import customImage5 from './images/img30.jpg';
import customImage6 from './images/img31.jpg';
import customImage7 from './images/img32.jpg';
import customImage8 from './images/img33.jpg';
import customImage9 from './images/img34.jpg';
import customImage10 from './images/img35.jpg';
import customImage11 from './images/img36.JPEG';
import customImage12 from './images/img37.JPEG';
import customImage13 from './images/img38.JPEG';
import customImage14 from './images/img39.JPEG';
import customImage15 from './images/img40.jpg';
import customImage16 from './images/img41.jpg';
import customImage17 from './images/img42.jpg';
import customImage18 from './images/img43.jpg';

const images = [
  { url: customImage1, alt: "Description of custom image 1" },
  { url: customImage2, alt: "Description of custom image 2" },
  { url: customImage3, alt: "Description of custom image 3" },
  { url: customImage4, alt: "Description of custom image 4" },
  { url: customImage5, alt: "Description of custom image 5" },
  { url: customImage6, alt: "Description of custom image 1" },
  { url: customImage7, alt: "Description of custom image 2" },
  { url: customImage8, alt: "Description of custom image 3" },
  { url: customImage9, alt: "Description of custom image 4" },
  { url: customImage10, alt: "Description of custom image 5" },
  { url: customImage11, alt: "Description of custom image 1" },
  { url: customImage12, alt: "Description of custom image 2" },
  { url: customImage13, alt: "Description of custom image 3" },
  { url: customImage14, alt: "Description of custom image 4" },
  { url: customImage15, alt: "Description of custom image 5" },
  { url: customImage16, alt: "Description of custom image 3" },
  { url: customImage17, alt: "Description of custom image 4" },
  { url: customImage18, alt: "Description of custom image 5" }
];

function DesignPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [isTransitioning]); // Add isTransitioning as a dependency

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [isTransitioning]); // Add isTransitioning as a dependency

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 400);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]); // Add nextSlide as a dependency

  return (
    <div className="background-container">
      {/* Heading for the carousel */}
      <h2 className="design-heading">More Designs</h2>
      <div className="carousel-container">
        <div className="carousel">
          <div className="slides-container">
            {images.map((image, index) => {
              const position = (index - currentIndex + images.length) % images.length;
              return (
                <figure 
                  key={index}
                  className={`slide ${position === 0 ? 'active' : ''}`}
                  style={{ transform: `translateX(${position * 100}%)` }}
                >
                  <img src={image.url} alt={image.alt} loading="lazy" />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              );
            })}
          </div>

          <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button className="carousel-button next" onClick={nextSlide} aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignPage;
