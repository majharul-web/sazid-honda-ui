
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';


const AddProducts = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('http://localhost:5000/addProducts', data)

            .then(res => {
                if (res.data.insertedId) {
                    alert('Product insert success');
                    reset();
                }
            })


    };

    return (
        <div className='container py-4'>
            <div>
                <h3 className='text-center text-danger py-3'>Add Products</h3>
                <form className='d-flex flex-column justify-content-center align-items-center ' onSubmit={handleSubmit(onSubmit)}>

                    <input className='w-50 form-control p-2 mb-3' type='text' defaultValue={user?.displayName} {...register("name", { required: true })} />
                    <input className='w-50 form-control p-2 mb-3' type='email' defaultValue={user?.email} {...register("email", { required: true })} />

                    <input className='w-50 form-control p-2 mb-3' type="text" {...register("productName")} placeholder='Product Name' />
                    <input className='w-50 form-control p-2 mb-3' type="number" {...register("price")} placeholder='Product Price' />

                    <textarea className="w-50 form-control p-2 mb-3" cols="" rows="" placeholder='Description...' {...register("description")}></textarea>
                    <input className='w-50 form-control p-2 mb-3' type='text'  {...register("imgURL")} placeholder='image link' />
                    <input className='w-50 form-control p-2 mb-3 btn btn-danger' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;