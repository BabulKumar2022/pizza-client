import React from 'react'
import { Button } from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux'
import {placeOrder} from '../actions/orderAction'
import Loader from './Loader'
import Error from './Error'
import Success from './Success'
 

const Checkout = ({subTotal}) => {
  const orderState = useSelector(state => state.placeOrderReducer)
  const {loading, error, success} = orderState
  const dispatch = useDispatch()

    const tokenHandler = (token)=>{
      dispatch(placeOrder(token, subTotal))
        console.log(token)
    }
  return (<>
      {loading && (<Loader />)}
      {error && (<Error error="something went wrong"/>)}
      {success && (<Success success="order success"/>)}
  
    <StripeCheckout
    amount={subTotal * 100}
    shippingAddress
    token={tokenHandler}
    stripeKey= "pk_test_51N3LwID3DUasc0CjWrvh6w9hpnOfLFxauyxUttcSsyQ644DmA7DEOFc1VWhy4pU5zUI2eDCJJ5Mr6kc2uLVoyZS900n2nL5zM6"
    currency='BDT'
    >

        <Button>Pay Now</Button>
    </StripeCheckout>
    </>)
}

export default Checkout