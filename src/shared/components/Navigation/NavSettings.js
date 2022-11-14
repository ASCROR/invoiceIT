import React from 'react';
import UserIcon from '../../../icon-user.svg';
import { NavLink } from 'react-router-dom';


import './NavSettings.css';


const NavSettings = props => {


    return <ul className="nav-settings">

        <li>
            <NavLink to="/profil">
            <img className="user-icon" src={UserIcon} alt="Profil"/>
            </NavLink>
        </li>
        <li>
            <NavLink to="/odjava">
            Odjava
            </NavLink>
        </li>

    </ul>
};

export default NavSettings;