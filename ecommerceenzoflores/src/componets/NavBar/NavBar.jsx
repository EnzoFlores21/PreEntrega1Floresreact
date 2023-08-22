import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';

function NavBar() {
    return (
            <Navbar bg="info" data-bs-theme="secondary">
                <Container>
                    <Navbar.Brand href="#home">SurApple</Navbar.Brand>
                    <Nav className="me-auto m-auto p-2">
                        <Nav.Link href="#home">Celulares</Nav.Link>
                        <Nav.Link href="#features">Tablets</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                        
                    </Nav>
                    3 <CartWidget />
                </Container>
            </Navbar>
    );
}

export default NavBar;