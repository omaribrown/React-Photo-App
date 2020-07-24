import React from 'react'
import girl1 from './Images/profile-pics/girl1.jpeg'
import './Styles/Profile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey='profile' id ='uncontrolled-tab-example'>
                    <Tab eventKey='profile' title='Information'>
                        <h1>profile infooooo</h1>
                    </Tab>
                    <Tab eventKey='posts' title='Posts'>
                        <h1>bookmarks infooooo</h1>
                    </Tab>
                    <Tab eventKey='bookmarks' title='Bookmarks'>
                        <h1>bookmarks infooooo</h1>
                    </Tab>
                </Tabs>
                {/* <Container>
                    <Row>
                        <Col><img src={girl1} alt='girl1' /></Col>
                        <Col><h2>Name</h2></Col>
                    </Row>
                    
                </Container> */}
                
                {/* <p>Bio</p>
                <h4>Uploads</h4> */}
                {/* photo grid */}
            </div>
        )
    }
}
