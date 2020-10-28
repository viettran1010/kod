import React, {useState, useContext} from 'react';
import { useFormik } from 'formik'
import { Card, Container, Form, Button, Alert } from 'react-bootstrap'
import * as yup from 'yup'
import axios from 'axios'
import {AuthUserCtx} from '../context/auth'
import {Redirect} from 'react-router-dom'
const validationSchema = yup.object().shape({
    username: yup.string().min(6, 'Username is less than 6 characters').required('Username is required'),
    password: yup.string().min(6, 'Password is less than 6 characters').required('Password is required'),
})

export const Login = () => {
    const authUserCtx = useContext(AuthUserCtx) 
    const [login, setLogin] = useState(false)
    const [isSuccess, setSuccess]= useState(false)
    const [isError, setError] = useState(false)
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (value) => {
            axios.post('http://localhost:4000/auth/login',{
                username: value.username,
                password: value.password
            }).then((res) => {
                authUserCtx.setAuthUser(res.data.user)
                localStorage.setItem('jwt', res.data.token)
                setSuccess(true)
                setError(false)

            }).catch(() => {
                setError(true)
                setSuccess(false)
            }).finally(() => {
                setLogin(false)
            })
        },
        validationSchema: validationSchema
    })
    
    if(authUserCtx.authUser){
        return <Redirect to="/"/>
    }
    const { handleSubmit, handleChange, handleBlur, touched, errors } = formik
    return (
        <Container className="mt-5">
            <Card border="info">
                <Card.Header>Login</Card.Header>
                <Card.Body>
                {isSuccess ? <Alert variant="success">Login successfully</Alert> : null}
                    {login && isError ? <Alert variant="danger">Wrong username or password</Alert> : null}
                    <Card.Title>Please fill out the form</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter User Name" name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.username && errors.username} />
                            <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.password && errors.password} />
                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={login}>
                            {login ? "I'm Login": "Login"}
  </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}