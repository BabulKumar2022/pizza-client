import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {logoutUser} from '../actions/userAction'


const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer)
  const userState = useSelector((state) => state.loginUserReducer);
  const {currentUser} = userState
  return (
    <>
    <Navbar bg="warning" expand="lg">
        <Container>
            <Navbar.Brand href="/"><h2>PIZZA BAZAR</h2> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  {
                    currentUser ? (
                      <LinkContainer to="/">
                      {/* <Nav.Link >{currentUser.name}</Nav.Link> */}
                      <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                        <LinkContainer to="/orders">
                          <NavDropdown.Item >
                            Order
                          </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin">
                          <NavDropdown.Item >
                           DASHBOARD
                          </NavDropdown.Item>
                        </LinkContainer>
                      
                        <NavDropdown.Item onClick={()=> {dispatch(logoutUser())}}>
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                      </LinkContainer>
                    ) : (<>
                    {" "}
                    <LinkContainer to="/register">
                    <Nav.Link >Register</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                    <Nav.Link >Login</Nav.Link>
                    </LinkContainer>
                    </>)
                  }

                    <LinkContainer to="/cart">
                    <Nav.Link >Cart {cartState.cartItems.length}</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}

export default NavBar