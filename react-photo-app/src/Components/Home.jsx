import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import cityBedroom from './Images/andrea-davis-Dtn5A7eA4ak-unsplash.jpg'
// import upload as './Images/andrea-davis-Dtn5A7eA4ak-unsplash.jpg'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <Card>
                        <Card.Img className='card-image' variant='top' src={ cityBedroom } alt='city bedroom' />
                        {/* <img className='card-image' src={ cityBedroom } alt='city bedroom' /> */}
                        <Card.Body>
                            {/* <Card.Title>title</Card.Title> */}
                            <Card.Text>caption caption caption</Card.Text>
                            <Card.Footer>
                                <small className='text-muted'>Uploaded 2 days ago</small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant='top' src='./Images/andrea-davis-Dtn5A7eA4ak-unsplash.jpg' />
                        <Card.Body>
                            {/* <Card.Title>title</Card.Title> */}
                            <Card.Text>caption caption caption</Card.Text>
                            <Card.Footer>
                                <small className='text-muted'>Uploaded 2 days ago</small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant='top' src='./Images/andrea-davis-Dtn5A7eA4ak-unsplash.jpg' />
                        <Card.Body>
                            {/* <Card.Title>title</Card.Title> */}
                            <Card.Text>caption caption caption</Card.Text>
                            <Card.Footer>
                                <small className='text-muted'>Uploaded 2 days ago</small>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}
