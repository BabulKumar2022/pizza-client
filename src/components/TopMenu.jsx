import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {MdOutlineLocalOffer} from 'react-icons/md'

export const TopMenu = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <h6 className='text-light'>
                    <MdOutlineLocalOffer className='text-warning'/>
                      &nbsp;&nbsp;  5% Discount !! Order above $500/=
            
                </h6>
                <Nav className='ms-auto'>
                    <LinkContainer to="/" activeClassName>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about" activeClassName>
                        <Nav.Link>about</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact" activeClassName>
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/policy" activeClassName>
                        <Nav.Link>Policy</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}
