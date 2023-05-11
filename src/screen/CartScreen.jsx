import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
  return (
    <>
    <Container>
        <Row>
            <Col md={7}>
                <h1>My Cart </h1>
                <hr/>
                <Row>
                    {
                        cartItems.map(item=>(
                            <>
                         
                                <Col md={7}>
                                    <h5><span className='text-primary'>Name:</span> {item.name} <span className="text-danger">Size:</span>  {item.variant}</h5>
                                    <h6>{" "}
                                    Price:<span></span> {item.quantity}x {item.prices[0][item.variant]} = {""} {item.price} /=</h6>
                                    <h6><span></span>Quantity: {item.quantity}</h6>

                                </Col>
                                <Col md={5}>
                                    <img alt={item.name} src={item.image} style={{width:"100px", height: "100px"}}/>
                                
                                </Col>
                                <hr/>
                                <hr/>
                            </>
                            
                        ))
                    }
                </Row>
            </Col>
            <Col md={5}>
                <h1>Payment Info</h1>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default CartScreen