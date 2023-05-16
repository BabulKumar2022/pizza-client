import React from 'react'
import { Container, Row,Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {AiFillMinusCircle}  from 'react-icons/ai'
import {BsFillPlusCircleFill}  from 'react-icons/bs'

import {addToCart, deleteFromCart} from '../actions/cartAction'
import Checkout from '../components/Checkout'

const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const subTotal = cartItems.reduce((x, item)=> x + item.price, 0)
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
                                    <h5><span className='text-primary'>Quantity: &nbsp;</span> <BsFillPlusCircleFill className='text-success'
                                     style={{cursor: "pointer"}}
                                     onClick={()=>{dispatch(addToCart(item, item.quantity + 1, item.variant))}}
                                    />&nbsp; {item.quantity } &nbsp; <AiFillMinusCircle className='text-success'
                                    style={{cursor: "pointer"}}
                                    onClick={()=>{dispatch(addToCart(item, item.quantity - 1, item.variant))}}
                                    /> 
                                   
                                     </h5>
                                    

                                </Col>
                                <Col md={5}>
                                    <img alt={item.name} src={item.image} style={{width:"100px", height: "100px"}}/>
                                    <Button className='bg-danger '
                                    style={{cursor: "pointer", marginLeft:'30px'}}
                                    onClick={()=>{dispatch(deleteFromCart(item))}}> 
                                    DELETE</Button>
                                </Col>
                                <hr/>
                                <hr/>
                            </>
                            
                        ))
                    }
                </Row>
            </Col>
            <Col md={5} >
                <div className="" style={{marginLeft: '25px'}}>
                    <h1>Payment Info</h1>
                    <h4>Sub Total</h4>
                    <h4>$ : {subTotal} /=</h4>
                   <Checkout subTotal={subTotal}/>
                </div>

            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default CartScreen