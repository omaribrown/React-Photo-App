import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Styles/Login.css'

export default class Login extends React.Component {

    render() {
        return (
            <div>
                <Container className='login-container'>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId='formGroupEmail'>
                                    <Form.Label>Username or Email Address</Form.Label>
                                    <Form.Control type='email' placeholder='Enter Username or Email' className='form-box'/>
                                </Form.Group>
                                <Form.Group controlId='formGroupPassword'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' placeholder='Password' className='form-box'/>
                                </Form.Group>
                                <Button variant='primary' type='submit'>
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

// HARD TO DO 