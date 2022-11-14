import React from 'react';
import { NavLink } from 'react-router-dom';


import './NavLinks.css';


const NavLinks = props => {


  return <ul className="nav-links">
    <NavLink to="izrada-fakture">
    <li>
      Izrada fakture
    </li>
    </NavLink>
    <NavLink to="moji-klijenti">
    <li>
      Moji klijenti
    </li>
    </NavLink>
    <NavLink to="moje-tvrtke">
    <li>
      Moje tvrtke
    </li>
    </NavLink>
  </ul>
};

export default NavLinks;