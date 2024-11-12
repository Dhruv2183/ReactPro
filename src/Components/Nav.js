import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav justify-content-center nav-underline" style={{ 
        fontSize: "2.0rem", 
        display: "flex", 
        justifyContent: "center", 
        margin: "2rem 0", 
        listStyleType: "none", 
        padding: 0 
      }}>
      <li className="nav-item">
        <Link className="nav-link" to="/products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/designs">Designs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>
    </ul>
  );
};

export default Nav;
