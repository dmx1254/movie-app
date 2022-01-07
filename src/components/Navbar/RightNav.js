import React from 'react';
import { Link } from 'react-router-dom';
import "./rightnav.css";

const RightNav = ({ handleToggleNavSearch, handleToggleNavBar }) => {
    return (
        <div className='rightnav'>
            <div className='rightnav__first'>
            <p>
                <i className="fas fa-plus"></i>
            </p>
            <p>
            <i className="far fa-bell"></i>
            </p>
            <p>
                <span>
                <Link to="/about">
                    about
                </Link>
                </span>
                
            </p>
            </div>
            <div className='rightnav__second'>
                <label className='right__nav_search'>
                    <i className="fas fa-bars" onClick={handleToggleNavBar}></i>
                </label>
                <p>
                    <i className="fas fa-search" onClick={handleToggleNavSearch}></i>
                </p>
            </div>
        </div>
    );
};

export default RightNav;