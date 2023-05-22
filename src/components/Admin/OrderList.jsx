import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import Loader from '../Loader'
import Error from '../Error'
import { Table } from 'react-bootstrap'
import { getAllOrders, getUserOrders } from '../../actions/orderAction'


const OrderList = () => {
  const orderState = useSelector(state => state.getUserOrderReducer)
  const {loading, error, orders} = orderState
    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(getUserOrders())
    },[dispatch])
  // const allOrderState = useSelector(state => state.allUserOrderReducer)
  // const {loading, orders, error} = allOrderState;
  // const dispatch = useDispatch()

  //   useEffect(()=>{
  //     dispatch(getAllOrders())
  //   },[dispatch])
  //   console.log(orders)
  return (


    <>
    <div className='text-center'><h3>All Order</h3></div>
    {loading && (<Loader/>)}
    {error && (<Error error="something went wrong"/>)}

    <Table striped bordered hover >
      <thead>
             <tr>
               <th>Order ID</th>
               <th>Email</th>
               <th>User ID</th>
               <th>Amount</th>
              <th>Date</th>
               <th>Status</th>
            </tr>
          </thead>
          <tbody>
                  {
                    orders && orders.map((order)=>(
                      <tr key={order._id}>

                       <td>ID: {order._id}</td>
                       <td> {order.email}</td>
                       <td> {order.name}</td>
                       <td> {order.orderAmount}</td>
                       <td> {order.createdAt.substring(0, 10)}</td>
                      </tr>
                    ))
                  }
                </tbody> 
      </Table>
   
</>
  )
}

export default OrderList