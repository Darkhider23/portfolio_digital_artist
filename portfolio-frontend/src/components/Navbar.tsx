import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
      <div className="nav-title">
        <h1>Digital Artist Portfolio</h1>
      </div>
      <div className="nav-right">
        <ul>
          <li><Link to="/?showall=false" >Show Displayed Only</Link></li>
          <li><Link to="/?showall=true" >Show All</Link></li>
          <li><Link to="/works/add" >Add Work</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
