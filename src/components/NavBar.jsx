import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const NavBar = () => {
  return (
    <>
    <Navbar bg="warning" expand="lg">
        <Container>
            <Navbar.Brand href="/"><h2>PIZZA BAZAR</h2> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <LinkContainer to="/login">
                    <Nav.Link >Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                    <Nav.Link >Cart</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}

export default NavBar