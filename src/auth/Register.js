import React, {useState} from 'react'
import { Card, Container, Form, Button, Alert } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const validationSchema = yup.object().shape({
    username: yup.string().min(6, 'Username is less than 6 characters').required('Username is required'),
    password: yup.string().min(6, 'Password is less than 6 characters').required('Password is required'),
    confirmPassword: yup.string().min(6, 'Confirm Password is less than 6 characters').required('Confirm Password is required').oneOf([yup.ref('password')], 'Confirm Password not match')
})

export const Register = () => {
    const [registering, setRegistering]= useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [isError, setError] = useState(false)
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: (value) => {
            axios.post('http://localhost:4000/auth/register', {
                username: value.username,
                password: value.password
            }).then(res =>{
                setSuccess(true)
                setError(false)
            }).catch(()=>{
                setError(true)
                setSuccess(false)
            }).finally(()=>{
                setRegistering(false)
            })
        },
        validationSchema: validationSchema,
    })
    const { handleSubmit, handleChange, handleBlur, touched, errors } = formik
    return (
        <Container className="mt-5">
            <Card border="info">
                <Card.Header>Register</Card.Header>
                <Card.Body>
                    {isSuccess ? <Alert variant="success">Register successfully</Alert> : null}
                    {registering && isError ? <Alert variant="danger">Register failed</Alert>: null}
                    <Card.Title>Please fill out the form</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter User Name" name="username" 
                            onChange={handleChange}
                             onBlur={handleBlur} 
                             isInvalid={touched.username && errors.username}/>
                            <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" 
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            isInvalid={touched.password && errors.password}/>
                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            isInvalid={ touched.confirmPassword && errors.confirmPassword}/>
                            <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={registering}>
                           {registering ? "Registering......": "Register"}
  </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}
