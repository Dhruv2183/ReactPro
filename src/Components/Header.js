import React from 'react';

const Header = () => {
  return (
    <div style={{ textAlign: "center", position: 'relative', zIndex: 1, marginBottom: "0.25rem" }}> {/* Reduced marginBottom */}
      <a href='/' style={{ textDecoration: "none", color: "black", fontFamily: "'Raleway', sans-serif" }}>
        <h1 style={{ fontSize: "3rem", margin: "1rem 0", fontFamily: "'Raleway', sans-serif" }}> 
          Manaan&CO.
        </h1>
      </a>
    </div>
  );
};

export default Header;
