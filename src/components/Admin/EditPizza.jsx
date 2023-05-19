import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { getPizzaById, updatePizza} from '../../actions/pizzaAction'
import { useParams } from 'react-router-dom'

import Loader from '../Loader';
import Error from '../Error';
import Success from '../Success';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



 const EditPizza = () => {
    const [name, setName] = useState('')
    const [smallPrice, setSmallPrice] = useState('')
    const [largePrice, setLargePrice] = useState()
    const [mediumPrice, setMediumPrice] = useState()
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    //===============================
    const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer)
    const {loading, error, pizza} = getPizzaByState;
    //===================================
    const updatePizzaState = useSelector(state => state.updatePizzaByIdReducer)
    const {updateLoading, updateSuccess, updateError} =updatePizzaState;
    //====================================
  const {pizzaId} = useParams()
    const dispatch = useDispatch();
    useEffect(() =>{
     if(pizza){
        if(pizza._id === pizzaId){
            setName(pizza.name)
           setImage(pizza.image)
           setSmallPrice(pizza.prices[0]['small'])
           setMediumPrice(pizza.prices[0]['medium'])
           setLargePrice(pizza.prices[0]['large'])
           setDescription(pizza.description)
           setCategory(pizza.category)
        }else{
            dispatch(getPizzaById(pizzaId))
        }
     }else{
        dispatch(getPizzaById(pizzaId))
     }
           
            
   
   
    },[pizza, dispatch])
//=====================================
const submitForm =(e)=>{
      
    e.preventDefault();
    const updatedPizza = {
        _id: pizzaId,
      name, image, description, category,
      variant:{
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      prices:{
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      }
    }
    console.log(pizza)
    dispatch(updatePizza(updatedPizza))
  }
  return ( 
    <div className="">
        <h2>Name: {name}</h2>
{/* //============================ */}
<div>
      {updateLoading && (<Loader/>)}
      {error && (<Error error="add new pizza error"/>)}
      {/* {success && (<Success success="Pizza added successfully"/>)} */}
      <h5 className='text-center'>Edit Pizza </h5>
      <hr />
        <Form onSubmit={submitForm} style={{width:'90%'}} className='m-auto bg-light'>
          <Row>
              <Form.Group className="mb-3" as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"
               placeholder="Enter Name"
               value={name}
               onChange={e => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" as={Col} controlId="formGridImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                type="text"
                value={image}
                onChange={e => setImage(e.target.value)}
                  placeholder="Enter Image URL" />
              </Form.Group>
          </Row>
          <Row>
          <Form.Group className="mb-3" as={Col} controlId="formGridSmallPrice">
              <Form.Label>Small Price</Form.Label>
              <Form.Control 
              type="text"
              value={smallPrice}
               placeholder="Enter Small Price" 
               onChange={e => setSmallPrice(e.target.value)}/>
            </Form.Group>
              <Form.Group className="mb-3" as={Col} controlId="formGridMediumPrice">
              <Form.Label>Medium Price</Form.Label>
              <Form.Control 
              type="text"
              value={mediumPrice}
               placeholder="Enter medium Price"
               onChange={e => setMediumPrice(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" as={Col} controlId="formGridLargePrice">
              <Form.Label>Large Price</Form.Label>
              <Form.Control
               type="text"
               value={largePrice}
                placeholder="Enter Large Price"
                onChange={e => setLargePrice(e.target.value)}/>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" as={Col} controlId="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
               type="text"
               value={description} 
               placeholder="Write Aa description" 
               onChange={e => setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} controlId="formGridCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
               type="text"
               value={category} 
               placeholder="Write Aa description" 
               onChange={e => setCategory(e.target.value)}/>
            </Form.Group>
           
          </Row>

        <Button variant="primary" type='submit' >
          UPDATE PIZZA
        </Button>
      </Form>
    </div>
    </div>

  )
}
export default EditPizza