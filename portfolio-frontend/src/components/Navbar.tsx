import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaHome } from 'react-icons/fa';
import { AddWork, ShowAllIcon, ShowOnlyIcon } from '../styles/Icons';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <ul>
          <li><Link to="/"><span className='home text'>Home</span> <FaHome className='home icon' /></Link></li>
        </ul>
      </div>
      <div className="nav-title">
        <h1>Digital Artist Portfolio</h1>
      </div>
      <div className="nav-right">
        <ul>
          <li><Link to="/?showall=false" ><span className='showonly text'>Show Displayed Only</span> <ShowOnlyIcon className='showonly icon' /></Link></li>
          <li><Link to="/?showall=true" ><span className='showonly text'>Show All</span><ShowAllIcon className='showall icon' /></Link></li>
          <li><Link to="/works/add" ><span className='showonly text'>Add Work</span><AddWork className='add icon' /></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
