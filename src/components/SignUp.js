import React, { useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'
import {auth} from '../firebase'
export default function SignUp() {
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    var name = "";
    function handleSubmit(e){
        e.preventDefault()
        setError("")
        setLoading(true)
        name = nameRef.current.value
        // console.log("Name",nameRef.current.value)  
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords don't match")
        }
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((user) => {
            console.log("Hi",user)
            console.log(name)  
            user.user.updateProfile({
                displayName: name,
              }).then(function() {
                  setError("")
              }).catch(function(error) {
                setError("Failed to set name")
                console.log(error)
              });
            console.log(user)
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError(error.message)
        });

        setLoading(false)
        history.push("/")
    }
    // async function handleSubmit(e) {
    //     e.preventDefault()

    //     if(passwordRef.current.value !== passwordConfirmRef.current.value){
    //         return setError("Passwords don't match")
    //     }
    //     try {
    //         setError("")
    //         setLoading(true)
    //         name = nameRef.current.value
    //         await signup(emailRef.current.value, passwordRef.current.value)
    //     }
    //     catch{
    //         setError("Failed to create account")
    //     }
    //     setLoading(false)
    //     history.push("/")
    // } 
    return (
    <>
    <Card style = {{minWidth:'500px'}}>
        <Card.Body>
        <h2 className = "text-center mb-4"> Sign Up</h2>
        {error && <Alert variant = "danger">{error}</Alert>}
        <Form onSubmit = {handleSubmit}>
        <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref = {nameRef} placeholder="Enter Your Name" required/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" ref = {emailRef} placeholder="Enter email" required/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref = {passwordRef} placeholder="Password" required/>
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" ref = {passwordConfirmRef} placeholder="Confirm Password" required/>
        </Form.Group>
        <Button disabled={loading} variant="primary" type="submit">
            Sign Up
        </Button>
        </Form>
        </Card.Body>
        <h6 style = {{textAlign: "center"}}> Already Have an Account? <Link to = "/login">Sign In</Link></h6>
        </Card>
    </>
    )
}
