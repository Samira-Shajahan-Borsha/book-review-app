import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const Reviews = () => {
    const allReviews = useLoaderData();
    console.log(allReviews);
    return (
        <div className='bg-zinc-100 '>
            <h1 className='text-4xl font-semibold text-gray-800 text-center py-10'>Customer Book Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-9 px-10'>
                {
                    allReviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;