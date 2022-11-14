
import React from 'react';
import { NavLink } from 'react-router-dom';


import './NavLinks.css';


const NavLinks = props => {


  return <ul className="nav-links">
    
    <li>
      Izrada fakture
    </li>
    <li>
      Moji klijenti
    </li>
    <li>
      Moje tvrtke
    </li>
  </ul>
};

export default NavLinks;