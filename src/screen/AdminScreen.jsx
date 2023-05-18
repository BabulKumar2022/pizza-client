import React, { useEffect } from 'react'
import {  Col, Navbar, Row } from 'react-bootstrap'
import { Outlet} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'
import Nav from 'react-bootstrap/Nav';


const AdminScreen = () => {
    const userState = useSelector(state => state.loginUserReducer)
    const {currentUser} = userState
    useEffect(()=>{
        if(localStorage.getItem('currentUser') === null || currentUser.isAdmin){
            window.location.href = '/'
        }
    },[])
  return (
    <>
  
        <Row>
            <h4 className='text-center bg-dark text-light p-1'>Admin Panel</h4>
            <Col md={2}>
          
              <Navbar bg="dark" variant="dark" style={{height:'400px'}}>
              <Nav variant="pills"  className="flex-column text-center m-4 ">
                        <LinkContainer to="/admin/orderList" activeClassName>
                             <Nav.Link >ORDER LIST</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/admin/userList" activeClassName>
                            <Nav.Link >USER LIST</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/admin/pizzaList" activeClassName>
                            <Nav.Link >PIZZA LIST</Nav.Link>
                        </LinkContainer>
                      
                        <LinkContainer to="/admin/addPizza" activeClassName>
                            <Nav.Link >ADD PIZZA</Nav.Link>
                        </LinkContainer>
                        </Nav>
              </Navbar>
                   
                
      
            </Col>
            <Col md={10}>
                <Outlet/>
            </Col>
        </Row>


    </>
  )
}

export default AdminScreen