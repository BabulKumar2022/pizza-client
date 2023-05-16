import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../actions/userAction';
import Loader from '../components/Loader'
import Success from '../components/Success';
import Error from '../components/Error';






const Register = () => {

   const [name, setName] = useState(" ")
   const [email, setEmail] = useState(" ")
   const [password, setPassword] = useState(" ")
   const [confirmPassword, setConfirmPassword] = useState(" ")

    const registerState = useSelector(state => state.registerUserReducer)
    const {error, success, loading}=registerState

const dispatch = useDispatch()
//form handler
const registerHandler = (event) =>{
 
    event.preventDefault();
    if(password !== confirmPassword){
        alert("password does not match")
    }else{
        const user= {name, email, password, confirmPassword}
        dispatch(registerUser(user))
        console.log(user)
        
    }
    window.location.href = "/login"
}



  return (
    <>
        <Container>
            {loading && <Loader/>}
            {success && <Success success="USER REGISTER SUCCESS"/>}
            { error && <Error error="SOMETHING WENT WRONG"/>}
        <Form style={{width: "33%",marginLeft: "33%"}}>
            <h2>Registration</h2>
            <hr/>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text"
                 placeholder="Enter your name"
                 value={name} 
                 onChange={e=> setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email"
                 placeholder="Enter email"
                 value={email} 
                 onChange={e=> setEmail(e.target.value)}
                  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password"
                value={password} 
                 onChange={e=> setPassword(e.target.value)}
                 />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                 type="password" 
                 placeholder="Confirm Password" 
                 value={confirmPassword} 
                 onChange={e=> setConfirmPassword(e.target.value)}
                 />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary"
        
             onClick={registerHandler}
             >
                Register
            </Button>
            </Form>
        </Container>
    </>
  )
}

export default Register