import React, { useEffect } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../../actions/pizzaAction'
import Pizza from '../../components/Pizza'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import Table from 'react-bootstrap/Table';




const PizzaList = () => {
  const dispatch = useDispatch()
  const pizzaState = useSelector(state => state.getAllPizzaReducer)
  const {loading, pizzas, error} = pizzaState;
  useEffect(()=>{dispatch(getAllPizzas())},[dispatch])
  return (
    <div>
   
              <h5 className='text-center'>Pizza List</h5>
      {loading ? ( <Loader className="text-center"/>)
              : error ? (<Error>Error while fetching pizzas{error}</Error>)
              :(
                  <Table striped bordered hover >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Picture</th>
                      <th>Pizza Name</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                  {pizzas &&
                      pizzas.map((pizza) =>(
                      <tr>
                        <td>{pizza.index}</td>
                        <td><img src={pizza.image} alt="logo" style={{width: "80px"}}/></td>
                        <td>{pizza.name}</td>
                        <td>
                          Small: {pizza.prices[0]['small']}
                          <br />
                          Medium: {pizza.prices[0]['medium']}
                          <br />
                          Large: {pizza.prices[0]['large']}
                          <br />
                        </td>
                        <td>{pizza.category}</td>
                        <td> <AiFillEdit/> &nbsp;&nbsp; <AiFillDelete/></td>
                      </tr>
                      ))
                  }
                    
                  </tbody>
                </Table>
              )
      }

    </div>
  )
}

export default PizzaList