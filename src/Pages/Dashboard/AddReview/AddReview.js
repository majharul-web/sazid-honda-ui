import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('https://mighty-bayou-89893.herokuapp.com/addReview', data)

            .then(res => {
                if (res.data.insertedId) {
                    alert('Send Review success');
                    reset();
                }
            })
    };

    return (
        <div className='container py-4'>
            <div>
                <h3 className='text-center text-danger py-3'>Trough Review</h3>
                <form className='d-flex flex-column justify-content-center align-items-center ' onSubmit={handleSubmit(onSubmit)}>

                    <input className='w-50 form-control p-2 mb-3' type='text' defaultValue={user?.displayName} {...register("name", { required: true })} />
                    <input className='w-50 form-control p-2 mb-3' type='email' defaultValue={user?.email} {...register("email", { required: true })} />

                    <input className='w-50 form-control p-2 mb-3' type="number" {...register("rating")} placeholder='Rating point' />

                    <textarea className="w-50 form-control p-2 mb-3" cols="" rows="" placeholder='Your Comment...' {...register("comment")}></textarea>

                    <input className='w-50 form-control p-2 mb-3 btn btn-danger' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;