import React from 'react'
import girl1 from './Images/profile-pics/girl1.jpeg'

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <img src={girl1} alt='girl1' />
            </div>
        )
    }
}
