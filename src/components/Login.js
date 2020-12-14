import React, { useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'
export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login, signInWithGoogle} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleGoogleLogin(e)
    {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await signInWithGoogle()
            history.push("/")
        }
       

        catch{
            setError("Failed to sign in")
        }
        setLoading(false)
    }
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }
       

        catch{
            setError("Failed to sign in")
        }
        setLoading(false)

    } 
    return (
    <>
    <Card style = {{minWidth:'500px'}}>
        <Card.Body>
        <h2 className = "text-center mb-4"> Log In</h2>
        {error && <Alert variant = "danger">{error}</Alert>}
        <Form onSubmit = {handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" ref = {emailRef} placeholder="Enter email" required />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref = {passwordRef} placeholder="Password" required />
        </Form.Group>
        <Button disabled={loading} variant="primary" type="submit">
            Login
        </Button>
        </Form>
        <h6 style = {{textAlign: "left" ,paddingTop:"10px"}}><Link to = "/forgot-password">Forgot Password?</Link></h6>
        </Card.Body>
        <h6 style = {{textAlign: "center"}}> Don't Have an Account? <Link to = "/signup">Sign Up</Link></h6>
        <Button className="sign-in" onClick={handleGoogleLogin}>Sign in with Google</Button>
        </Card>
    </>
    )
}
