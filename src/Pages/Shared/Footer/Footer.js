import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            {/* footer top */}
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-5 col-md-5">
                            {/* footer right */}
                            <div className='footer_widget text-center text-md-start '>
                                {/* footer logo */}
                                <div className='text-light'>
                                    <Link to='home' className='text-decoration-none text-danger'>
                                        <h2 className='fw-bold'>
                                            SAZID Honda
                                        </h2>
                                    </Link>
                                </div>
                                <p className='text-light mt-4'>

                                    5th flora, 700/D kings road, green <br />
                                    lane Dinajpur-1782
                                    <br />
                                    <a href="/">+10 367 826 2567</a>
                                    <br />
                                    <a href="/">contact@sazidauto.com</a>
                                </p>
                                <div className='socail_links'>
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className='text-center text-md-start'>
                                <h3 className='text-light '>Company</h3>
                                <ul className='list-unstyled mt-4 f-link'>
                                    <li><a className='text-decoration-none text-light ' href="/">Price</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">About</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">Gallery</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">Contact</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">Privacy Policy</a></li>
                                    <li><a className='text-decoration-none text-light ' href="/">Terms and Conditions</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div >
                                <div>
                                    <h3 className='text-light text-center'>Popular Brands</h3>
                                </div>
                                <div className='d-flex justify-content-evenly'>
                                    <ul className='list-unstyled mt-4 f-link'>
                                        <li><a className='text-decoration-none text-light ' href="/">Honda</a></li>
                                        <li><a className='text-decoration-none text-light ' href="/">Yamaha</a></li>
                                        <li><a className='text-decoration-none text-light ' href="/">Suzuki</a></li>
                                        <li><a className='text-decoration-none text-light ' href="/">Kawasaki</a></li>
                                        <li><a className='text-decoration-none text-light ' href="/">Mahindra</a></li>
                                    </ul>
                                    <ul className='list-unstyled mt-4 f-link'>
                                        <li><a className='text-decoration-none text-light ' href="/">Bajaj</a></li>
                                        <li><a className='text-decoration-none text-light ' href="/">TVS</a></li>
                                        <li><a className='text-decoration-none text-light ' href="/">Dayun</a></li>
                                        <li><a className='text-decoration-none text-light ' href="/">Runner</a></li>
                                        <li><a className='text-decoration-none text-light ' href="/">Bennett</a></li>
                                    </ul>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* footer bottom */}
            <div className='footer-bottom'>
                <div className="container">
                    <hr className='text-light ' />
                    <div className="row">
                        <div className="col-md-12">
                            <p className='text-light text-center'>
                                Copyright &copy;2021 All rights reserved |
                                <i className="far fa-heart mx-2"></i>
                                by
                                <a href="/" className=' ms-1 text-danger text-decoration-none'>Sazid Honda</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;