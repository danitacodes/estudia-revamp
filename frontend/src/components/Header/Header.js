import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


const Header = () => {
  return (
    <Navbar bg='primary' expand='lg' variant='dark'>
        <Container>
            <>
            <Navbar.Brand href='/'>Study Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='/studylist'>
                               My Study Log
                            </Nav.Link>
                            <NavDropdown title='Danita Codes' id='basic-nav-dropdown'>
                                <NavDropdown.Item href='/profile'>
                                    My Profile
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </>
        </Container>
    </Navbar>
  )
}

export default Header