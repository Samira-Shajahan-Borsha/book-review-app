import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Review from '../Review/Review';

const Home = () => {
    const navigate = useNavigate();

    const allReviews = useLoaderData();

    const handleSeeAllReviews = () => {
        navigate('/reviews');
    }

    return (
        <div className='bg-zinc-100'>
            <section className='grid grid-cols-1 md:grid-cols-2 px-8 py-8'>
                <div className='flex flex-col justify-center w-full md:pl-16 px-4'>
                    <h1 className='font-extrabold md:text-6xl text-3xl text-gray-800'>It Ends with Us: A Novel</h1>
                    <p className='text-2xl text-gray-500 mb-2'>August 2, 2016</p>
                    <h1 className='text-base'>by <span className='text-cyan-700'>Colleen Hoover</span></h1>
                    <blockquote className='text-lg text-gray-900 text-justify mb-2 mt-4'>
                        "but sometimes the things that matter to you most are also the things that hurt you the most. And in order to get over that hurt, you have to sever all the extensions that keep you tethered to that pain."</blockquote>
                    <p className='text-gray-800'>― Colleen Hoover, It Ends with Us</p>
                </div>
                <div className='flex w-full justify-center mt-3'>
                    <img className='w-72' src="https://msmagazine.com/wp-content/uploads/2022/09/91OT29EvAXL-679x1024.jpg" alt="bookImg" />
                </div>
            </section>
            <section>
                <h1 className='text-5xl text-gray-800 my-8 text-center'>Customer Reviews</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-9 px-10 py-8'>
                    {
                        allReviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <div className='text-lg flex justify-center py-10 text-white'>
                    <button className='bg-pink-900 rounded-full px-8 py-3 hover:opacity-100 opacity-90' onClick={handleSeeAllReviews}>See all reviews</button>
                </div>
            </section>
        </div>
    );
};

export default Home;