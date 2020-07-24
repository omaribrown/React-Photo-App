import React from 'react'
import girl2 from './Images/profile-pics/girl2.jpeg'
import './Styles/Profile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/esm/Card'
import CardColumns from 'react-bootstrap/CardColumns'

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey='profile' id ='uncontrolled-tab-example' className='profile-tabs'>
                    <Tab eventKey='profile' title='Profile Info'>
                        <Card style={{ width: '200px' }}>
                            <Card.Img variant='top' src={girl2} />
                            <Card.Body>
                                <Card.Title>Jane Doe</Card.Title>
                                <Card.Subtitle>@PlainJane</Card.Subtitle>
                                <Card.Text>Bio information</Card.Text>
                            </Card.Body>
                        </Card>
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
                        <CardColumns>
                            <Card>
                                <Card.Img variant='top' src={girl2} />
                                <Card.Body>
                                    <Card.Title>Title</Card.Title>
                                    <Card.Text>Text</Card.Text>
                                    <Card.Footer>
                                        <small className='text-muted'>Upload date</small>
                                </Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant='top' src={girl2} />
                                <Card.Body>
                                    <Card.Title>Title</Card.Title>
                                    <Card.Text>Text</Card.Text>
                                    <Card.Footer>
                                        <small className='text-muted'>Upload date</small>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant='top' src={girl2} />
                                <Card.Body>
                                    <Card.Title>Title</Card.Title>
                                    <Card.Text>Text</Card.Text>
                                    <Card.Footer>
                                        <small className='text-muted'>Upload date</small>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </CardColumns>
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
