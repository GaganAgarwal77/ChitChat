import React, { Component, useState } from 'react';
import { Navbar, Nav, Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignInAlt,
  faUserPlus,
  faSignOutAlt,
  faUser,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import './css/Navbar.css'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
// import logo from './g.jpg' 
export default function MyNavbar(props) {
  console.log(window.location.pathname)
  const [error, setError] = useState("")
  const {currentUser, logout } = useAuth()
  var isAuthenticated = false
  if(currentUser !== null){
    isAuthenticated = true
  }
  const history  = useHistory()
  async function handleLogout()
  {
      setError("")
      try {
          await logout()
          history.push('/login')
      } catch {
          setError("Failed to log out")
      }
  }
    return (
        <div >
          <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
              <Navbar.Brand href='/' style={{ color: '#7acdff' }}>
                ChitChat                     <FontAwesomeIcon
                      icon={faComments  }
                      transform='shrink-3'
                    />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'></Nav>
                <Nav>
                  <Nav.Link eventKey='1'>
                    <Link
                      to='/'
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: 'smooth',
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={faHome} />
                      Home
                    </Link>
                  </Nav.Link>
                  {isAuthenticated
                    ? [
                        <Nav.Link eventKey='2'>
                          <Link
                            to='/update-profile'
                            onClick={() => {
                              window.scroll({
                                top: 0,
                                left: 0,
                                behavior: 'smooth',
                              });
                            }}
                          >
                            {' '}
                            <FontAwesomeIcon icon={faUser} />
                            Update Profile
                          </Link>
                        </Nav.Link>,
                        <Nav.Link eventKey='4' onClick={handleLogout}>
                          <Link
                            to='/'
                            onClick={() => {
                              window.scroll({
                                top: 0,
                                left: 0,
                                behavior: 'smooth',
                              });
                            }}
                          >
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Logout
                          </Link>
                        </Nav.Link>,
                      ]
                    : [
                        <Nav.Link eventKey='5'>
                          <Link
                            to='/login'
                            onClick={() => {
                              window.scroll({
                                top: 0,
                                left: 0,
                                behavior: 'smooth',
                              });
                            }}
                          >
                            <FontAwesomeIcon icon={faSignInAlt} />
                            Login
                          </Link>
                        </Nav.Link>,
                        <Nav.Link eventKey='6'>
                          <Link
                            to='/signup'
                            onClick={() => {
                              window.scroll({
                                top: 0,
                                left: 0,
                                behavior: 'smooth',
                              });
                            }}
                          >
                            <FontAwesomeIcon icon={faUserPlus} />
                            Register
                          </Link>
                        </Nav.Link>,
                      ]}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
