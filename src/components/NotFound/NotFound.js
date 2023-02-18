import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col md:flex-row bg-zinc-100 px-6 md:px-36 md:py-32 items-center'>
        <div className='md:w-6/12 mr-48'>
            <p><small className='text-xs text-gray-500 sm:w-78'>ERROR 404</small></p>
            <h1 className='text-4xl font-extrabold text-gray-900 my-2'>Oops! The page you're looking for isn't here.</h1>
            <p className='text-xl text-gray-700'>You might have the wrong address, or the page may have moved.</p>
            <div className='my-6'>
                <Link to='/'>
                    <button className='bg-pink-900 py-2 px-2 text-white mr-2'>Back to homePage</button>
                </Link>                
            </div>
        </div>
        <div className='md:w-6/12 md:px-14 mt-4 '>
            <img className='' src="https://img.freepik.com/premium-vector/404-error-design-with-magnifying-glass_23-2147739031.jpg?size=338&ext=jpg&ga=GA1.1.456469406.1675268634&semt=ais" alt="error-img" />
        </div>
    </div>
    );
};

export default NotFound;