import React, { useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'


const Header = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch ();

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/')
    }

    useEffect(() => {}, [userInfo])

  return (
    <Navbar bg='primary' expand='lg' variant='dark'>
        <Container>
            <>
            <Navbar.Brand href='/'>Study Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav>
                            {userInfo ? (
                                <>
                            <Nav.Link href='/studylist'>
                               My Study Log
                            </Nav.Link>
                            <NavDropdown title={userInfo?.username} id='basic-nav-dropdown'>
                                <NavDropdown.Item href='/profile'>
                                    My Profile
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logoutHandler}
                                >
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                            </>
                            ) : (
                                <Nav.Link href='/signin'>Signin</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                    </>
        </Container>
    </Navbar>
  )
}

export default Header