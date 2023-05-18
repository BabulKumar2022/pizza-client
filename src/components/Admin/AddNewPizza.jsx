import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { addPizza } from '../../actions/pizzaAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import Error from '../Error';
import Success from '../Success';


const AddNewPizza = () => {

  const [name, setName] = useState('')
  const [smallPrice, setSmallPrice] = useState('')
  const [largePrice, setLargePrice] = useState()
  const [mediumPrice, setMediumPrice] = useState()
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
 
 const addPizzaState = useSelector(state => state.addPizzaReducer)
  const {loading, error, success}= addPizzaState
 const dispatch = useDispatch()


  const submitForm =(e)=>{
      
      e.preventDefault();
      const pizza = {
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
      dispatch(addPizza(pizza))
    }  
  return (
    <div>
      {loading && (<Loader/>)}
      {error && (<Error error="add new pizza error"/>)}
      {success && (<Success success="Pizza added successfully"/>)}
      <h5 className='text-center'>Add Pizza </h5>
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
          ADD PIZZA
        </Button>
      </Form>
    </div>
  )
}

export default AddNewPizza