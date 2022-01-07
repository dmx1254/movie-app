import React from 'react';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import "./navbar.css";

const Navbar = ({ handleToggleNavSearch, handleToggleNavBar }) => {
    return (
        <div className='navbar'>
            <LeftNav />
            <RightNav handleToggleNavSearch={handleToggleNavSearch} handleToggleNavBar={handleToggleNavBar}/>
        </div>
    );
};

export default Navbar;