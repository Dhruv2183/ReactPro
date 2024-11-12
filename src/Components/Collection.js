import React, { useEffect, useState } from 'react';
import './Collection.css'; 
import image1 from "./images/img8.jpg"; 
import image2 from "./images/img19.jpeg"; 
import image3 from "./images/img22.jpg"; 
const Collection = () => {
  const [isStuck, setIsStuck] = useState(false); // State to track if the Collection is stuck

  const cardsData = [
    {
      title: "Premium Marble Table",
      description: "A luxurious marble table perfect for any dining setting.",
      features: [
        "Material: Marble",
        "Dimensions: 6ft x 3ft",
        "Color Options: White, Black, Grey",
        "Care: Wipe with a damp cloth"
      ],
      imageUrl: image1
    },
    {
      title: "Granite Dining Table",
      description: "Durable and elegant, this granite dining table is a must-have for modern homes.",
      features: [
        "Material: Granite",
        "Dimensions: 5ft x 3ft",
        "Color Options: Black, Brown, Beige",
        "Care: Clean with mild soap and water"
      ],
      imageUrl: image2
    },
    {
      title: "Classic Stone Table",
      description: "An exquisite stone table that adds rustic charm to your home.",
      features: [
        "Material: Natural Stone",
        "Dimensions: 4ft x 3ft",
        "Color Options: Grey, Beige",
        "Care: Avoid harsh chemicals"
      ],
      imageUrl: image3
    }
  ];

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const collectionElement = document.querySelector('.collection');
      const offset = collectionElement.getBoundingClientRect().top;

      // Check if the Collection is at the top of the viewport
      if (offset <= 0) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
    };
  }, []);

  return (
    <div className={`collection ${isStuck ? 'stuck' : ''}`}>
      <h2>Our Collection</h2>
      <div className="heading-line"></div> 
      <div className="collection-container">
        {cardsData.map((card, index) => (
          <div className="collection-item" key={index}>
            <img src={card.imageUrl} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <ul>
              {card.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <a href="/products" className="view-all-button">View All Products</a>
    </div>
  );
};

export default Collection;
