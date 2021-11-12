import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className='notFound-container '>
                <div className="container">
                    <div className="row ">
                        <div className="col ">
                            <div className='back-home d-flex align-items-center justify-content-center'>
                                <Link to='/home'>
                                    <Button className='button-back text-light' variant='outline-info'>
                                        <span className='mx-2'><i className="fas fa-home"></i></span>
                                        Back to Home
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotFound;