import React from 'react';
import './Header.css';

function Header({ onBackClick, showBackButton }) {
  return (
    <header className="header">
      <h1>Rancid Tomatillos</h1>
      {showBackButton && (
        <button className="back-button" onClick={onBackClick}>
          Back to list
        </button>
      )}
    </header>
  );
}

export default Header;
