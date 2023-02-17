import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex sticky top-0 text-lg font-sans text-pink-800 font-medium bg-white items-center justify-center gap-12 py-7 px-12 uppercase shadow-md'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/reviews'>Reviews</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
        </nav>
    );
};

export default Header;