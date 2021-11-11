import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col text-center py-5">
                        <div>
                            <h2 className='fw-bold'>SUBSCRIBE TO GET EXCLUSIVE UPDATES</h2>
                            <p className='text-secondary pt-4'>Leave your email, we will send useful info and exclusive offers. No spam</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <InputGroup className="mb-3 w-75">
                                <FormControl
                                    placeholder="Enter Your Email Address"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button className='mx-3 rounded-3 py-2' variant='danger'>SUBSCRIBE!</Button>
                            </InputGroup>
                        </div>
                        <p className='pt-4'>
                            <small>
                                By using this form you confirm that you have read and agree to our <span>
                                    <a href="/">Privacy Policy</a>
                                </span>.
                            </small>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;