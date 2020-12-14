import React, { useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom'
export default function ForgotPassword() {
    const emailRef = useRef();
    const {resetPassword} = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setMessage("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for reset instructions")
        }
       
        catch{
            setError("Failed to reset password")
        }
        setLoading(false)

    } 
    return (
    <>
    <Card style = {{minWidth:'500px'}}>
        <Card.Body>
        <h2 className = "text-center mb-4"> Reset Password</h2>
        {message && <Alert variant ="success">{message}</Alert>}
        {error && <Alert variant = "danger">{error}</Alert>}
        <Form onSubmit = {handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" ref = {emailRef} placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Button disabled={loading} variant="primary" type="submit">
            Reset Password
        </Button>
        </Form>
        <h6 style = {{textAlign: "left" ,paddingTop:"10px"}}><Link to = "/login">Log In</Link></h6>
        </Card.Body>
        <h6 style = {{textAlign: "center"}}> Don't Have an Account? <Link to = "/signup">Sign Up</Link></h6>
        </Card>
    </>
    )
}
