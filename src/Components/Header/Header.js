import React from 'react';
import './Header.css';

function Header({ onBackClick, showBackButton }) {
  return (
    <header className="header">
      <h1>Rancid Tomatillos</h1>
    </header>
  );
}

export default Header;
