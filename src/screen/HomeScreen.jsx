import React, { useEffect } from 'react'
// import AllPizza from '../pizza-data'
import { Container, Row,Col } from 'react-bootstrap'
import Pizza from '../components/Pizza'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaAction'
import Loader from '../components/Loader'
import Error from '../components/Error'
const HomeScreen = () => {
    const dispatch = useDispatch()
    const pizzaState = useSelector(state => state.getAllPizzaReducer)
    const {loading, pizzas, error} = pizzaState;
    useEffect(()=>{dispatch(getAllPizzas())},[dispatch])
  return (
    <>
    <Container style={{marginTop: '10px'}}>

        {loading ? ( <Loader />)
                : error ? (<Error>Error while fetching pizzas{error}</Error>)
                :(
                    <Row>
                    {
                        pizzas.map(pizza =>(
                            <Col md={4}>
                                <Pizza key={pizza._id} pizza={pizza}/>
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