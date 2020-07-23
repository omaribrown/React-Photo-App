import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar 
            collapseOnSelect
            expand='lg'
            bg='primary'
            variant='dark'>
            <Navbar.Brand 
                href='#home'>
                    ReactGram
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#profile'>Profile</Nav.Link>
                    <NavDropdown title='More' id='collasible-nav-dropdown'>
                        <NavDropdown.Item href='#bookmarks'>Bookmarks</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='#login'>Login</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    // <Nav variant='tabs' defaultActiveKey='/home'>
    //     <Nav.Item>
    //         <Nav.Link href='/home'>Home</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link href='/bookmarks'>Bookmarks</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link href='/profile'>Profile</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //         <Nav.Link href='/Login'>Login</Nav.Link>
    //     </Nav.Item>
    // </Nav>
    )
}

export default NavBar;