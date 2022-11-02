import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navs.scss"

const Navs = () => {
    return (
        <div className='nav-repo'>
            <ul className="navs div className='wrapper-all'">
                <NavLink to={'/overview'}><li><i className='bi bi-book active'><i>Overview</i></i></li></NavLink>
                <NavLink to={'/repositories'}><li><i className='fa-solid fa-book active'><i>Repositories</i></i></li></NavLink>
                <NavLink to={'/projects'}><li><i className='fa-solid fa-book active'><i>Projects</i></i></li></NavLink>
                <NavLink to={'/stars'}><li><i className='fa-solid fa-book active'><i>Stars</i></i></li></NavLink>
                <NavLink to={'/followers'}><li><i className='fa-solid fa-book active'><i>Followers</i></i></li></NavLink>
                <NavLink to={'/following'}><li><i className='fa-solid fa-book active'><i>Following</i></i></li></NavLink>
            </ul>
        </div>
    );
};

export default Navs;