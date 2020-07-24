import React from 'react'
import girl1 from './Images/profile-pics/girl1.jpeg'
import './Styles/Profile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col><img src={girl1} alt='girl1' /></Col>
                        <Col><h2>Name</h2></Col>
                    </Row>
                    
                </Container>
                
                <p>Bio</p>
                <h4>Uploads</h4>
                {/* photo grid */}
            </div>
        )
    }
}
