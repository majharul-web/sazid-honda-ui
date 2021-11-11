import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Bike.css';

const Bike = ({ bike }) => {
    const { productName, imgURL, price, description, _id } = bike;
    return (
        <div className="col-md-4">
            <div className='bikeCard'>
                <div className='p-3'>
                    <div>
                        <img className='img-fluid w-100' src={imgURL} alt="" />
                    </div>
                    <div className='mt-3'>
                        <h3 className='text-danger'>{productName}</h3>
                        <h6>Price: <span className='text-primary'>$ {price}</span> </h6>
                        <p>{description.split('').slice(0, 200).toString().replace(/,/g, '')}</p>
                        <Link to={`/purchase/${_id}`}>
                            <Button variant='danger'>Purchase</Button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bike;