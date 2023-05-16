import React, { useEffect } from 'react'
import {  Col, Nav, Row } from 'react-bootstrap'
import { Outlet} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'


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
            <h3 className='text-center bg-dark text-light p-1'>Admin Panel</h3>
            <Col md={4}>
            <div className='' style={{minHeight: '400px',
                                     backgroundColor: '#0443',
                                     width:'200px',
                                     textAlign: 'center'}}>
                     <hr/>         
                <LinkContainer to="/admin/orderList">
                    <Nav.Link ><h5 >Oder List</h5></Nav.Link>
                </LinkContainer>
                <hr/>
                <LinkContainer to="/admin/userList">
                    <Nav.Link ><h5>User List</h5></Nav.Link>
                </LinkContainer>
                <hr/>
                <LinkContainer to="/admin/pizzaList">
                    <Nav.Link ><h5>Pizz List</h5></Nav.Link>
                </LinkContainer>
                <hr/>
                <LinkContainer to="/admin/addPizza">
                    <Nav.Link ><h5>Add Pizza</h5></Nav.Link>
                </LinkContainer>
                <hr/>
                
             </div>
               
            </Col>
            <Col md={8}>
                <Outlet/>
            </Col>
        </Row>


    </>
  )
}

export default AdminScreen