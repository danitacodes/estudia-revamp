import React, {useEffect } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./Home.css"

const Home = () => {

    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo')
        if (userInfo) {
          navigate('/studylist');
        }
        
      }, [userInfo])



  return (
    <div className='main'>
        <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className='title'> Welcome to</h1> 
                            <h1 className='title'>Study Tracker</h1>
                        </div>
                        <div className='buttonContainer'>
                            <a href='/signin'>
                                <Button size='md' className='homebutton'>
                                    Signin
                                </Button>
                            </a>
                            <a href='/signup'>
                                <Button size='md' className='homebutton'>
                                    Signup
                                </Button>
                            </a>
                            {/* <a href='/demo'>
                                <Button size='md' className='homebutton' onClick={loggedIn}>
                                    Demo
                                </Button>
                            </a> */}
                        </div>
                    </div>
                </Row>
            </Container>
    </div>
  )
}

export default Home