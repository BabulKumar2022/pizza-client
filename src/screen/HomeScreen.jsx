import React, { useEffect } from 'react'
// import AllPizza from '../pizza-data'
import { Container, Row,Col } from 'react-bootstrap'
import Pizza from '../components/Pizza'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaAction'
const HomeScreen = () => {
    const dispatch = useDispatch()
    const pizzaState = useSelector(state => state.getAllPizzaReducer)
    const {loading, pizzas, error} = pizzaState;
    useEffect(()=>{dispatch(getAllPizzas())},[dispatch])
  return (
    <>
    <Container style={{marginTop: '10px'}}>

        {loading ? (<h1 className='text-center'>Loading...</h1>)
                : error ? (<h1 >Error while fetching</h1>)
                :(
                    <Row>
                    {
                        pizzas.map(pizza =>(
                            <Col md={4}>
                                <Pizza pizza={pizza}/>
                            </Col>
                        ))
                    }
                </Row>
                )
    }
       
    </Container>
    </>
  )
}

export default HomeScreen