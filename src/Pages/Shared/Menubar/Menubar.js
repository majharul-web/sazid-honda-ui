import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container fluid className='mx-5 py-2 '>
                <Navbar.Brand >
                    <Link to='home' className='text-decoration-none text-danger'>
                        <h2 className='fw-bold'>
                            SAZID Honda
                        </h2>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">


                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to="/home" active className='fs-5 mx-1'>Home</Nav.Link>
                        {
                            user.email &&
                            <Nav.Link as={Link} to="/dashboard" active className='fs-5 mx-1'>Dashboard</Nav.Link>
                        }


                        {
                            user?.email ?

                                <Button variant='danger' onClick={logOut}>Log out</Button>
                                :
                                <Link to='/login'>
                                    <Button variant='danger'>Log In</Button>
                                </Link>
                        }

                        {
                            user?.email &&
                            <Nav.Link className=' mx-2'>
                                <div>
                                    <img style={{ width: '30px', height: "30px", borderRadius: '50%' }} src={user?.photoURL} alt={user?.displayName} />
                                </div>
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;