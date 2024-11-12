import React, { useState, useEffect } from 'react';
import './Products.css';

// Import your custom images
import stoneTableImage1 from './images/img1.jpeg';
import stoneTableImage2 from './images/img2.jpg';
import stoneTableImage3 from './images/img4.png';
import stoneTableImage4 from './images/img7.JPEG';
import stoneTableImage5 from './images/img8.jpg';
import stoneTableImage6 from './images/img11.jpg';
import stoneTableImage7 from './images/img12.JPEG';
import stoneTableImage8 from './images/img18.jpeg';
import stoneTableImage9 from './images/img14.jpg';
import stoneTableImage10 from './images/img15.jpg';
import stoneTableImage11 from './images/img16.jpg';
import stoneTableImage12 from './images/img17.JPEG';
import stoneTableImage13 from './images/img13.jpg';
import stoneTableImage14 from './images/img19.jpeg';
import stoneTableImage15 from './images/img20.jpeg';
import stoneTableImage16 from './images/img21.jpeg';
import stoneTableImage17 from './images/img22.jpeg';
import stoneTableImage18 from './images/img23.jpeg';
import stoneTableImage19 from './images/img24.jpeg';
import stoneTableImage20 from './images/img25.JPEG';
function Products() {
  const products = [
    {
      id: 1,
      name: "Elegant Stone Dining Table",
      image: stoneTableImage1,
      description: "Dimensions: 72\" L x 36\" W x 30\" H. Features: Solid stone top, sturdy base, modern design."
    },
    {
      id: 2,
      name: "Contemporary Stone Coffee Table",
      image: stoneTableImage2,
      description: "Dimensions: 48\" L x 24\" W x 18\" H. Features: Unique stone pattern, polished surface, versatile style."
    },
    {
      id: 3,
      name: "Stylish Stone Side Table",
      image: stoneTableImage3,
      description: "Dimensions: 18\" L x 18\" W x 22\" H. Features: Compact design, great for small spaces, elegant finish."
    },
    {
      id: 4,
      name: "Rustic Stone Outdoor Table",
      image: stoneTableImage4,
      description: "Dimensions: 60\" L x 30\" W x 28\" H. Features: Weather-resistant, natural stone texture, ideal for patios."
    },
    {
      id: 5,
      name: "Luxury Stone Console Table",
      image: stoneTableImage5,
      description: "Dimensions: 54\" L x 12\" W x 30\" H. Features: Sleek design, functional storage, great for entryways."
    },
    {
      id: 6,
      name: "Modern Round Stone Table",
      image: stoneTableImage6,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 7,
      name: "Modern Round Stone Table",
      image: stoneTableImage7,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 8,
      name: "Modern Round Stone Table",
      image: stoneTableImage8,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 9,
      name: "Modern Round Stone Table",
      image: stoneTableImage9,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 10,
      name: "Modern Round Stone Table",
      image: stoneTableImage10,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    }, 
    {
      id: 11,
      name: "Modern Round Stone Table",
      image: stoneTableImage11,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 12,
      name: "Modern Round Stone Table",
      image: stoneTableImage12,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 13,
      name: "Modern Round Stone Table",
      image: stoneTableImage13,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 14,
      name: "Modern Round Stone Table",
      image: stoneTableImage14,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 15,
      name: "Modern Round Stone Table",
      image: stoneTableImage15,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 16,
      name: "Modern Round Stone Table",
      image: stoneTableImage16,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 17,
      name: "Modern Round Stone Table",
      image: stoneTableImage17,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 18,
      name: "Modern Round Stone Table",
      image: stoneTableImage18,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 19,
      name: "Modern Round Stone Table",
      image: stoneTableImage19,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
    {
      id: 20,
      name: "Modern Round Stone Table",
      image: stoneTableImage20,
      description: "Dimensions: 36\" Diameter x 30\" H. Features: Round design, suitable for dining or coffee, high-quality stone."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getVisibleProducts = () => {
    const productCount = products.length;
    return [
      (currentIndex - 1 + productCount) % productCount,
      currentIndex,
      (currentIndex + 1) % productCount,
    ].map(index => products[index]);
  };

  return (
    <div className="slider-container">
      <h1>Our Products</h1>
      
      <div className="slider-wrapper">
        <div className="slider">
          {getVisibleProducts().map((product, index) => (
            <div
              key={product.id}
              className={`slide position-${index}`}
            >
              <div className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-button prev" onClick={handlePrev}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button className="nav-button next" onClick={handleNext}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Products;


