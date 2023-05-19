import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../actions/orderAction'
import Loader from '../Loader'
import Error from '../Error'
import { Table } from 'react-bootstrap'


const OrderList = () => {
  const allOrderState = useSelector(state => state.allUserOrderReducer)
  const {loading, orders, error } = allOrderState
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getAllOrders())
  },[dispatch])
  return (
    <> 
        <h1 className='text-center'>OrderList</h1> 
        <hr />
        {loading && (<Loader/>)}
        {error && (<Error error="Admin request failed"/>)}
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
                  <td>{order.data.name}</td>
                </tr>
              ))
            }
          </tbody> 
        </Table>
    </>
  )
}

export default OrderList