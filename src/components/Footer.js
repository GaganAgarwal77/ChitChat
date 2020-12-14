import React, { Component } from 'react';
import { Navbar, Nav, Form, Button, Row, Col } from 'react-bootstrap';
import {
  faGithub,
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faUsers,
  faPlaneDeparture,
  faPhone,
  faEnvelope,
  faAddressBook,
  faComments
} from '@fortawesome/free-solid-svg-icons';

import './css/Footer.css'
export default function Footer() {
    return (
        <div>
            <footer className='site-footer'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12 col-md-4'>
                  <h6>
                    About The Project{' '}
                    <FontAwesomeIcon
                      icon={faComments  }
                      transform='shrink-3'
                    />
                  </h6>
                  <p className='text'>
                    This is a simple chat application project I have made using Firebase and React.
                  </p>
                </div>

                <div className='col-md-4 col-sm-6 col-xs-12'>
                  <h6>
                    Social Links{' '}
                    <FontAwesomeIcon
                      icon={faAddressBook}
                      transform='shrink-3'
                    />
                  </h6>
                  <span
                    style={{
                      color: 'white',
                    }}
                  >
                    &nbsp;
                    <FontAwesomeIcon icon={faPhone} />
                    &nbsp;{' '}
                    <span style={{ color: '#737373' }}>
                      {' '}
                      <a href='#'>123-456-789</a>
                    </span>
                  </span>
                  <br />
                  <br />
                  <span style={{ color: 'white' }}>
                    &nbsp;
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;
                    <span style={{ color: '#737373' }}>
                      <a href='#'> gaganagarwal700@gmail.com</a>
                    </span>
                  </span>
                  <br />
                  <br />
                  <ul className='social-icons'>
                    <li>
                      <a className='facebook' href='https://www.facebook.com/gagan.agarwal.121' target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size='2x' />
                      </a>
                    </li>
                    <li>
                      <a className='dribbble' href='https://github.com/GaganAgarwal77' target="_blank ">
                        <FontAwesomeIcon icon={faGithub} size='2x' />
                      </a>
                    </li>
                    <li>
                      <a className='linkedin' href='https://www.linkedin.com/in/gagan-agarwal-75b5a61a3/' target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='col-xs-6 col-md-3'>
                  <h6>Feedback</h6>
                  <Form>
                    <Form.Group as={Row} controlId='formPlaintextEmail'>
                      <Form.Label column sm='2'>
                        Email
                      </Form.Label>
                      <Col sm='10'>
                        <Form.Control type='email' placeholder='Enter email' />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId='formBasicTextArea'>
                      <Form.Label column sm='2'>
                        Input
                      </Form.Label>
                      <Col sm='10'>
                        <Form.Control
                          as='textarea'
                          rows='3'
                          placeholder='Your Feedback'
                        />
                      </Col>
                    </Form.Group>
                    <Button variant='secondary' type='submit'>
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
              {/* <hr> */}
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className='col-md-12 col-sm-6 col-xs-12'>
                <p className='copyright-text'>
                  Copyright &copy; 2020 All Rights Reserved
                </p>
              </div>
              <br />
            </div>
          </footer>
        </div>
    )
}
