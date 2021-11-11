import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {



    return (
        <div>
            <Carousel fade variant="dark">
                <Carousel.Item>
                    <Link to='/'>
                        <img
                            className="d-block w-100 "
                            src="https://i.ibb.co/cxnqjVg/main-banner-01-1903x780.png" alt=''
                        />
                    </Link>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to='/'>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/qMMfyf1/main-banner-02-1903x780.png" alt=''
                        />
                    </Link>

                </Carousel.Item>

                <Carousel.Item>
                    <Link to='/'>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/JqmsgLv/main-banner-03-1903x780.png" alt=''
                        />
                    </Link>

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;