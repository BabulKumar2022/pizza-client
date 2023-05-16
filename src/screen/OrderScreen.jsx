import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderAction'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { Col, Row } from 'react-bootstrap'

const OrderScreen = () => {
  const orderState = useSelector(state => state.getUserOrderReducer)
  const {loading, error, orders} = orderState
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getUserOrders())
    },[dispatch])
  return (
    <>
        <div className='text-center'><h3>OrderScreen</h3></div>
        {loading && (<Loader/>)}
        {error && (<Error error="something went wrong"/>)}
        {
      orders && orders.map(order =>(
        <div className="container border p-4 bg-light">
          <Row>
          <Col md={4}>
            <>
            <h3>Product Info</h3>
            {order.orderItems.map(item =>(
              <div>
              <h5>{item.name}[{item.variant}] * {item.quantity} = {item.price}</h5>
           
              </div>

            ))}
       
            </>
    
          </Col>
          <Col md={3}>
            <h3>Address</h3>
            <h5>Street: {order.shippingAddress.street}</h5>
            <h5>City: {order.shippingAddress.city} Zip: <span>{order.shippingAddress.code}</span></h5>
          
            <h5>Country: {order.shippingAddress.country}</h5>
    
          </Col>
          <Col md={5}>
            <h4>Order Info</h4>
            <h5>Order Amount: {order.orderAmount}</h5>
            <h5>Txid: {order.transactionId}</h5>
            <h5>Order ID: {order._id}</h5>

          </Col>
        </Row>
        </div>

      ))
    }
    </>

  )
}

export default OrderScreen