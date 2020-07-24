import React from 'react'
import girl2 from './Images/profile-pics/girl2.jpeg'
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
                <Tabs defaultActiveKey='profile' id ='uncontrolled-tab-example' className='profile-tabs'>
                    <Tab eventKey='profile' title='Information'>
                        {/* <Container>
                            <Row className='avi'>
                                <Col>
                                    <img src={girl2} alt='profile avi' />
                                </Col>
                            </Row>
                            <Row className='username'>
                                <Col>
                                    <h2>@girlNum2</h2>
                                </Col>
                            </Row>
                        </Container> */}
                        {/* <h1>profile infooooo</h1> */}
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
