import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const Reviews = () => {
    const allReviews = useLoaderData();
    console.log(allReviews);
    return (
        <div>
            <h1>Reviews: {allReviews.length}</h1>
            {
                allReviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;