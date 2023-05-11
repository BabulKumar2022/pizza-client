import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {AiFillMinusCircle}  from 'react-icons/ai'
import {BsFillPlusCircleFill}  from 'react-icons/bs'
import {addToCart} from '../actions/cartAction'

const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch()
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
                                    <h6>
                                   <span className='text-primary'>{" "} Price:</span> {item.quantity}x {item.prices[0][item.variant]} = {" "} {item.price} /=</h6>
                                    <h5><span className='text-primary'>Quantity: &nbsp;</span> <BsFillPlusCircleFill className='text-danger'
                                     style={{cursor: "pointer"}}
                                     onClick={()=>{dispatch(addToCart(item, item.quantity + 1, item.variant))}}
                                    />&nbsp; {item.quantity} &nbsp; <AiFillMinusCircle className='text-danger'
                                    style={{cursor: "pointer"}}
                                    onClick={()=>{dispatch(addToCart(item, item.quantity - 1, item.variant))}}
                                    />  </h5>

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