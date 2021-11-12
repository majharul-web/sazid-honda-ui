import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const user = { email };
        console.log(user);

        fetch('https://mighty-bayou-89893.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSuccess(true);
                reset();
            })

    };
    return (
        <div className='container py-4'>
            <div>
                <h3 className='text-center text-danger py-3'>Add An Admin</h3>
                <div className='d-flex justify-content-center'>
                    {success &&
                        <Alert className='w-50' variant="success">create admin successful</Alert>
                    }
                </div>
                <form className='d-flex flex-column justify-content-center align-items-center ' onSubmit={handleSubmit(onSubmit)}>

                    <input className='w-50 form-control p-2 mb-3' type='email' placeholder='Enter Emaill' {...register("email", { required: true })} />

                    <Button type='submit' className='w-50 form-control p-2 mb-3' variant='danger'>Add</Button>
                </form>


            </div>
        </div>
    );
};

export default MakeAdmin;