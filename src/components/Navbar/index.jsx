import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = ({ links }) => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {links.map((link, index) => {
                        if (link.dropdown) {
                            return (
                                <NavDropdown title={link.name} id={`nav-dropdown-${index}`} key={index}>
                                    {link.dropdown.map((subLink, subIndex) => (
                                        <NavDropdown.Item key={subIndex} href={subLink.url}>
                                            {subLink.name}
                                            </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            );
                        } else {
                            return (
                                <Nav.Link href={link.url} key={index}>
                                    {link.name}
                                </Nav.Link>
                            );
                        }
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    };

export default MyNavbar