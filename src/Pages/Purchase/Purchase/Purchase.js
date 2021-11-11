import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    const [exactProduct, setExactProduct] = useState({});

    // get data from database
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // get single data-----------
    useEffect(() => {
        if (products.length) {
            const exactDestination = products.find(product => product._id == id);
            setExactProduct(exactDestination);
        }
    }, [products]);

    const { productName, imgURL, price, description } = exactProduct;

    // Place order
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.image = imgURL;
        data.price = price;
        data.productName = productName;
        data.status = 'pending';

        axios.post('http://localhost:5000/addOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Confirm Order');
                    reset();
                }
            })
        console.log(data)
    };

    return (
        <div className='container py-5'>
            <h3 className='text-primary text-center py-4'>Confirm Your Order</h3>

            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-8 col-12 ">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-4 col-12">
                            <div>
                                <img className='img-fluid  w-100' src={imgURL} alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 col-12">
                            <div>
                                <h3 className='text-danger'>Product Name: {productName}</h3>
                                <p className='text-secondary'>{description}</p>
                                <h5>Cost: <span className='text-primary'>$ {price}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className='container'>
                        <div>
                            <form className='d-flex flex-column justify-content-center align-items-center ' onSubmit={handleSubmit(onSubmit)}>

                                <input className=' form-control p-2 mb-3' type='text' defaultValue={user?.displayName} {...register("name", { required: true })} />
                                <input className=' form-control p-2 mb-3' type='email' defaultValue={user?.email} {...register("email", { required: true })} />
                                <input className=' form-control p-2 mb-3' type="number" {...register("PhoneNumber")} placeholder='Phone Number' />
                                <input className=' form-control p-2 mb-3' type="text" {...register("address")} placeholder='Address' />
                                <input className=' form-control p-2 mb-3' type="text" {...register("city")} placeholder='City' />

                                <button className=' form-control p-2 mb-3 btn btn-danger' type="submit">Order Now</button>

                            </form>
                        </div>
                    </div>
                </div>

                <Link to='/home'>Home</Link>
            </div>
        </div>
    );
};

export default Purchase;