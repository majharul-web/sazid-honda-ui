import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container fluid className='mx-5 py-2'>
                <Navbar.Brand >
                    <Link to='home' className='text-decoration-none text-danger'>
                        <h2>
                            SAZID Honda
                        </h2>

                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link as={Link} to="/home" active className=' mx-1'>Home</Nav.Link>

                        <Nav.Link as={Link} to="/destination" active className=' mx-1'>Destination</Nav.Link>

                        <Nav.Link as={Link} to="/about" active className=' mx-1'>About</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login" active className=' mx-1'>Login
                        </Nav.Link>

                        <Nav.Link as={Link} to="/dashboard" active className=' mx-1'>Dashboard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;