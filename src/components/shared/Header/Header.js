import React from 'react';
import { signOut } from 'firebase/auth'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">NextGen Car Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='nav-link'>
                            <Link to="/">Home</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/manage">Manage Item</Link>

                            {
                                user ? (<Link to="/">Logout</Link>)
                                    : (<Link to="/login">Login</Link>)
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;