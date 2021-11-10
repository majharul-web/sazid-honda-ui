
import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { singInWithGoogle } = useFirebase();
    return (
        <div className='container text-center my-5'>
            <h3>Please Login</h3>
            <Button onClick={singInWithGoogle} variant='danger'>Google Login</Button>
        </div>
    );
};

export default Login;