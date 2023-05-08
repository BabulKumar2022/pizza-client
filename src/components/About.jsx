import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <>
        <Container style={{marginTop: '50px'}}>
            <h1 className='text-center'>Who we are</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci quos expedita officia numquam! Illo autem ex nemo, corporis quasi cupiditate aspernatur vero. Id ullam dolorum voluptatibus facere temporibus enim deleniti deserunt possimus omnis voluptatum inventore velit, optio voluptas nesciunt, at accusamus similique cupiditate, rem reiciendis quibusdam suscipit eum sapiente! Error molestias earum, nostrum, tempore quidem saepe eveniet voluptate laboriosam officiis consequuntur sunt doloremque itaque explicabo velit illo ex quos, impedit porro? Et porro ea reprehenderit, alias sunt in aliquid, asperiores cupiditate corrupti aliquam exercitationem corporis voluptas quam dolorem recusandae beatae eius earum accusantium nam labore? Amet quia atque maxime!</p>
            <h1>Our Speciality</h1>
            <Row>
                <Col md={6}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam debitis obcaecati amet. Quas quos, esse, minima doloremque, voluptas placeat accusamus nulla iusto tempore cum facilis autem molestiae praesentium adipisci voluptates ratione. Nam unde exercitationem quod blanditiis omnis, facilis inventore vitae ad suscipit error vel voluptatem porro modi nisi iusto alias dolore aperiam consequuntur. Iure quo architecto excepturi magnam fugit corporis dignissimos? Fugiat recusandae rerum consequuntur possimus modi quisquam sunt laudantium esse, odit facilis rem ipsa quae eum sint eveniet totam sequi aut odio reiciendis eligendi nesciunt eos, molestias itaque? Et quod eius eveniet delectus neque doloremque assumenda itaque quisquam natus?</p>
                </Col>
                <Col md={6}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore quibusdam error asperiores aspernatur magnam atque nisi fuga beatae cum, provident molestiae esse sapiente voluptatem? Incidunt excepturi quos illum, asperiores natus omnis ad maiores nesciunt quis. Dignissimos amet architecto, maxime ducimus reiciendis cum? Nulla debitis eveniet hic nemo et inventore sint dolorum minima! Dignissimos numquam pariatur, unde quo similique harum, quasi id nulla doloribus in expedita, corporis nesciunt. Provident facilis eligendi, autem rem esse corrupti, nobis unde, reprehenderit commodi nisi accusamus quis temporibus neque dolorum! Facere veritatis eum eveniet iste ratione natus, esse hic quos reprehenderit, aperiam labore similique voluptatem.</p>
                </Col>
            </Row>
            <Row>
              <h1>Our Chef</h1>
              <Col md={3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum fugit quaerat autem aliquid sequi error magnam! Ullam, odio commodi. Sequi, saepe modi hic temporibus fugit fugiat architecto, possimus corporis nesciunt magni ea ut iure harum, adipisci cumque nemo quidem praesentium!</Col>
              <Col md={3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum fugit quaerat autem aliquid sequi error magnam! Ullam, odio commodi. Sequi, saepe modi hic temporibus fugit fugiat architecto, possimus corporis nesciunt magni ea ut iure harum, adipisci cumque nemo quidem praesentium!</Col>
              <Col md={3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum fugit quaerat autem aliquid sequi error magnam! Ullam, odio commodi. Sequi, saepe modi hic temporibus fugit fugiat architecto, possimus corporis nesciunt magni ea ut iure harum, adipisci cumque nemo quidem praesentium!</Col>
              <Col md={3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum fugit quaerat autem aliquid sequi error magnam! Ullam, odio commodi. Sequi, saepe modi hic temporibus fugit fugiat architecto, possimus corporis nesciunt magni ea ut iure harum, adipisci cumque nemo quidem praesentium!</Col>
            </Row>
        </Container>
    </>
  )
}

export default About