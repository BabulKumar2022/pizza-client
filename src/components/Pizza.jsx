import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction';



const Pizza = ({pizza}) => {
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState("small")
  const [show, setShow] = useState(false);

  const dispatch = useDispatch()
  const addToCartHandler = ()=>{
      dispatch(addToCart(pizza, quantity, variant))
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <Container>
      <div className="gx-5 " >
      <Card style={{ width: '17rem', margin: '5px' ,  cursor: 'pointer'}}>
      <Card.Img 
      variant="top" 
      src={pizza.image}
       style={{height: "150px"}}
       onClick={handleShow}
     
       />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <hr/>
        <Card.Text>
         <Row>
            <Col md={6}>
                <h6>Variant</h6>
                <select value={variant} onChange={e => setVariant(e.target.value)}>
                    {
                      pizza.variant.map((variant)=>(
                          <option >{variant}</option>
                      ))
                    }
                </select>
            </Col>
            <Col md={6}>
                <h6>Quantity</h6>
                <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                        {
                            [...Array(10).keys()].map((v, i)=>(
                                <option value={i+1} >{i+1}</option>
                            ))
                        }
                </select>
            </Col>
         </Row>
        </Card.Text>
               <Row>
                <Col md={6}>Price: {pizza.prices[0][variant] *  quantity}</Col>
                <Col md={6}><Button 
                onClick={addToCartHandler}
                className='bg-warning'>Add to cart</Button></Col>
                </Row>         
      </Card.Body>
    </Card>


    {/* modal */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <Card.Img 
              variant="top" 
              src={pizza.image}
              style={{height: "250px"}}
              />
          </div>
          <div className="">
            <h5>Description</h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
        
      </Modal>
      </div>
    </Container>
  )
}

export default Pizza