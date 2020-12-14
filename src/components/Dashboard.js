import React, {useState} from 'react'
import {Card, Alert,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import ChatRoom from './ChatRoom'
export default function Dashboard() {
    const [error, setError] = useState("")
    const {currentUser } = useAuth()
    return (
        <>
        <div>
        <Card style = {{minWidth:'50vw'}}>
            <Card.Body>
            <h2 className = "text-center mb-4">Your Profile</h2>
            {error && <Alert variant = "danger">{error}</Alert>}
            {console.log(currentUser)}
            <strong>Your Name: </strong>{currentUser.displayName}<br/>
            <strong>Your Email: </strong>{currentUser.email}

            </Card.Body>

        </Card>
        <br/>
        <Link to='/chat' style= {{ paddingLeft:'30%'}}><Button>Start Chatting Now!</Button></Link>
        </div>
        </>

    )
}
