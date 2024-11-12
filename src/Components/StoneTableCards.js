
// import React from 'react';
// import './StoneTableCards.css'; 

// const StoneTableCard = () => {
//   const reasonsToChooseUs = [
//     "High-Quality Materials: We source only the finest stones for our tables, ensuring durability and elegance.",
//     "Custom Designs: Our tables can be customized to fit your unique style and preferences.",
//     "Affordable Pricing: Get the best value for premium quality stone tables.",
//     "Discover our exquisite range of stone tables, designed to elevate your living space with elegance and style.",
//     " Join us in celebrating the beauty of nature with our stunning collection that caters to all aesthetics."
//   ];

//   return (
//     <div className="card-container">
//       <div className="card">
//         <h2 className="card-title">Manaan&CO.<br /> A Contraction of Quality & Design</h2>
//         <p className="card-description">
//           At Manaan&CO., we believe that every piece of furniture should be a statement of style and functionality. Our stone tables are crafted with precision, ensuring that they not only look stunning but are also built to last. 
//         </p>
//         <ul className="card-features">
//           {reasonsToChooseUs.map((reason, index) => (
//             <li key={index} className="card-feature">{reason}</li>
//           ))}
//         </ul>
       
        
//         <a href="/about" className="about-us-button">About Us</a>
//       </div>
//     </div>
//   );
// };

// export default StoneTableCard;

import React from 'react';
import './StoneTableCards.css';

const StoneTableCard = () => {
  const reasonsToChooseUs = [
    "High-Quality Materials: We source only the finest stones for our tables, ensuring durability and elegance.",
    "Custom Designs: Our tables can be customized to fit your unique style and preferences.",
    "Affordable Pricing: Get the best value for premium quality stone tables.",
    "Discover our exquisite range of stone tables, designed to elevate your living space with elegance and style.",
    "Join us in celebrating the beauty of nature with our stunning collection that caters to all aesthetics."
  ];

  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card-title">Manaan&CO.<br />A Contraction of Quality & Design</h2>
        <p className="card-description">
          At Manaan&CO., we believe that every piece of furniture should be a statement of style and functionality. Our stone tables are crafted with precision, ensuring that they not only look stunning but are also built to last.
        </p>
        <ul className="card-features">
          {reasonsToChooseUs.map((reason, index) => (
            <li key={index} className="card-feature">{reason}</li>
          ))}
        </ul>
        <a href="/about" className="about-us-button">About Us</a>
      </div>
    </div>
  );
};

export default StoneTableCard;
