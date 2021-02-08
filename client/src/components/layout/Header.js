import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';
import {Navbar,Nav} from 'react-bootstrap';

class Header extends Component {
   
    render() { 
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">MERN</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/"><i class="fas fa-home fa-lg"></i></Nav.Link>
                <AuthOptions />
                </Nav>
            </Navbar.Collapse>
            </Navbar> 
         );
    }
}
 
export default Header;