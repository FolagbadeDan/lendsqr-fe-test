import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={require('./logo.png')} alt="Company Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      <div className="navbar-logout">
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;

// export default Navbar