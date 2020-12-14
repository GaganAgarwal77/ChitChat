import React, { useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'
export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();
    const {currentUser, updateEmail, updatePassword} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    function handleSubmit(e) {
        e.preventDefault()
        
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords don't match")
        }
        const promises = []
        setLoading(true)
        setError("")
        if(nameRef.current.value !== currentUser.displayName)
        {
            promises.push(currentUser.updateProfile({
                displayName: nameRef.current.value,
              }))
        }
        if(emailRef.current.value !== currentUser.email)
        {
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {setLoading(false)})
        
    } 
    return (
    <>
    <Card style = {{minWidth:'500px'}}>
        <Card.Body>
        <h2 className = "text-center mb-4">Update Profile</h2>
        {error && <Alert variant = "danger">{error}</Alert>}
        <Form onSubmit = {handleSubmit}>
        <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref = {nameRef} placeholder="Enter Name" required defaultValue= {currentUser.displayName}/>
            <Form.Text className="text-muted">
            Change name and hit update to only change name
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" ref = {emailRef} placeholder="Enter email" required defaultValue= {currentUser.email}/>
            <Form.Text className="text-muted">
            Change email address and hit update to only change email
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref = {passwordRef} placeholder="Type to change password"  />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" ref = {passwordConfirmRef} placeholder="Confirm Changed Password" />
        </Form.Group>
        <Button disabled={loading} variant="primary" type="submit">
            Update
        </Button>
        </Form>
        </Card.Body>
        <h6 style = {{textAlign: "center"}}>Change Your Mind? <Link to = "/">Cancel </Link></h6>
        </Card>
    </>
    )
}
