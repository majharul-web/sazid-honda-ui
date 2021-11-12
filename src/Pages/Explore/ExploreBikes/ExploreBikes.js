import React, { useEffect, useState } from 'react';
import Bike from '../../Home/Bikes/Bike/Bike';

const ExploreBikes = () => {
    const [products, setProducts] = useState([]);

    // get data from database
    useEffect(() => {
        fetch('https://mighty-bayou-89893.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='container'>
            <h3 className='text-center text-danger py-4'>All Bikes Collections</h3>
            <div className="row g-5">
                {
                    products.map(bike => <Bike bike={bike} key={bike._id}></Bike>)
                }

            </div>

        </div>
    );
};

export default ExploreBikes;