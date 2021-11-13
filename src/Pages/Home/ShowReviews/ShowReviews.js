import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    // get data from database
    useEffect(() => {
        fetch('https://mighty-bayou-89893.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div>
            <h3 className='text-center text-danger my-5'>Customer Reviews</h3>
            <div className="container">
                <div className="row g-5">
                    {
                        reviews.slice(0, 8).map(review => <Review review={review} key={review._id}></Review>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ShowReviews;