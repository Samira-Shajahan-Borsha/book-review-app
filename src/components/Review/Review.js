import React from 'react';

const Review = ({ review }) => {
   
    return (
        <div className='bg-white rounded-lg py-9 px-7 text-gray-800'>
            <div className='w-full rounded-lg flex justify-center mb-4'>
                <img className='w-48 rounded-3xl' src={review.image} alt="" />
            </div>
            <div>
                <h1 className='text-center text-lg font-semibold'>{review.name}</h1>
                <p className='text-justify my-4'><span className='underline'>Review</span>: {review.review}</p>
                <p><span className='underline'>Rating</span>: {review.rating}/5</p>
            </div>
        </div>
    );
};

export default Review;