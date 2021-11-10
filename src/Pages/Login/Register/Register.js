import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const { userRegister, authError } = useAuth();

    // error
    const [error, setError] = useState('');

    const history = useHistory();

    const onSubmit = data => {
        // console.log(data);
        const name = data.name;
        const email = data.email;
        const password = data.password;

        if (data.password !== data.password2) {
            setError('password did not matched')
            return;
        }
        else {
            setError('');
            userRegister(name, email, password, history, reset);

        }


    }
    return (
        <div>
            <div className="container">
                <h3 className='text-center text-danger py-3 fw-bold'> Register</h3>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 shadow-lg rounded-3 p-5">
                        <div>
                            <div>
                                {error &&
                                    <Alert variant='danger'>
                                        {error}
                                    </Alert>
                                }
                                {authError &&
                                    <Alert variant='danger'>
                                        {authError}
                                    </Alert>
                                }
                            </div>
                            <form className='d-flex flex-column justify-content-center align-items-center ' onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className=' form-control p-2 mb-3'
                                    {...register("name")}
                                    placeholder='Full Name'
                                />
                                <input
                                    className=' form-control p-2 mb-3'
                                    type="email" {...register("email", { required: true })}
                                    placeholder='Email'
                                />
                                <input
                                    className=' form-control p-2 mb-3'
                                    type="password" {...register("password", { required: true })}
                                    placeholder='Password'
                                />
                                <input
                                    className=' form-control p-2 mb-3'
                                    type="password" {...register("password2", { required: true })}
                                    placeholder='Re-type Password'
                                />
                                <button
                                    className=' form-control p-2 mb-3 btn btn-danger fw-bold'
                                    type="submit">
                                    Register
                                </button>
                            </form>
                            <Link className='text-decoration-none' to='/login'><span className='text-dark'>Already Register?</span> Please Login</Link>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className='d-none d-md-block'>
                            <img className='img-fluid w-100' src="https://i.ibb.co/MSBbLcd/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credential.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;