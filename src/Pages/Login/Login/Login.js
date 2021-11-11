
import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { singInWithGoogle, singInWithEmailPass, authError } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const location = useLocation();
    const history = useHistory();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;

        singInWithEmailPass(email, password, location, history, reset)
    }

    // google singIn
    const handleGoogleSingIn = () => {
        singInWithGoogle(location, history)
    }

    return (
        <div>
            <div className="container">
                <h3 className='text-center text-danger py-3 fw-bold'>Login</h3>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 ">
                        <div className='shadow-lg p-5 rounded-3'>
                            <div>
                                {authError &&
                                    <Alert variant='danger'>
                                        {authError}
                                    </Alert>
                                }

                            </div>
                            <form className='d-flex flex-column justify-content-center align-items-center ' onSubmit={handleSubmit(onSubmit)}>

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

                                <button
                                    className=' form-control p-2 mb-3 btn btn-danger fw-bold'
                                    type="submit">
                                    Login
                                </button>
                            </form>


                            <div className=' text-center '>

                                <Link to='/register' className='text-decoration-none'><span className='text-dark'>New User?</span> Please Register</Link>

                                <h6 >--------------- Or ---------------</h6>
                                <Button onClick={handleGoogleSingIn} variant='danger'>
                                    <span className='mx-2'>
                                        <i className='fab fa-google'></i>
                                    </span>
                                    Google
                                </Button>
                            </div>

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

export default Login;