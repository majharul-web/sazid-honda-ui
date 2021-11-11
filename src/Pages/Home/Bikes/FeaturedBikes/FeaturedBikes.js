import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

const FeaturedBikes = () => {
    const [products, setProducts] = useState([]);

    // get data from database
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h3 className='text-center text-danger my-3'>Featured Bikes</h3>
            <div className="container">
                <div className="row g-5">
                    {
                        products.slice(0, 6).map(bike => <Bike bike={bike} key={bike.id}></Bike>)
                    }

                </div>
            </div>
        </div>
    );
};

export default FeaturedBikes;