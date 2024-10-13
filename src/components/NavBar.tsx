import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>ART GALLERY</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          RIJKSMUSEUM GALLERY
        </Link>
        <Link to="/about" className="navbar-link">
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
