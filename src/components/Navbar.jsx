// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import './Navbar.css'; // Import your custom CSS for Navbar styles
import logo from 'assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        {/* Logo Section */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" /> {/* Replace with your logo path */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
