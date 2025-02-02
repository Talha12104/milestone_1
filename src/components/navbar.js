// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/experience">
            <FaBriefcase /> Experience
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaUser /> About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
