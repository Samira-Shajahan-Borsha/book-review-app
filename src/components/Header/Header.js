import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const activeClassName = 'text-gray-900 hover:text-gray-800 hover:underline underline-offset-4 decoration-solid';

    return (
        <nav className='flex sticky top-0 text-lg font-sans text-pink-800 font-medium bg-white items-center justify-center gap-12 py-7 px-12 uppercase shadow-md '>
            <NavLink to='/' className={({ isActive }) => isActive ? activeClassName : undefined}>Home</NavLink>
            <NavLink to='/reviews' className={({ isActive }) => isActive ? activeClassName : undefined}>Reviews</NavLink>
            <NavLink to='/statistics' className={({ isActive }) => isActive ? activeClassName : undefined}>Statistics</NavLink>
            <NavLink to='/blogs' className={({ isActive }) => isActive ? activeClassName : undefined}>Blogs</NavLink>
        </nav>
    );
};

export default Header;