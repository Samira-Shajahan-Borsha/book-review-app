import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex md:sticky top-0 text-lg font-sans text-pink-800 font-medium bg-white items-center justify-center gap-12 py-7 px-12 uppercase shadow-md absolute'>
            <NavLink to='/' className='hover:text-gray-800 hover:underline underline-offset-4 decoration-solid'>Home</NavLink>
            <NavLink to='/reviews' className='hover:text-gray-800 hover:underline underline-offset-4 decoration-solid'>Reviews</NavLink>
            <NavLink to='/statistics' className='hover:text-gray-800 hover:underline underline-offset-4 decoration-solid'>Statistics</NavLink>
            <NavLink to='/blogs' className='hover:text-gray-800 hover:underline underline-offset-4 decoration-solid'>Blogs</NavLink>
        </nav>
    );
};

export default Header;