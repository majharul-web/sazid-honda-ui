import React from 'react';
import Rating from 'react-rating';
import './Review.css'

const Review = (props) => {
    const { name, rating, comment } = props.review;
    return (
        <div className='col-md-3'>
            <div className='shadow-lg py-3 px-3 rate-bg'>
                <h6>Customer: {name}</h6>
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly>
                </Rating>
                <span className='text-danger fw-bold'> ({rating}) </span>
                <br />
                <p>"{comment}"</p>
            </div>

        </div>
    );
};

export default Review;