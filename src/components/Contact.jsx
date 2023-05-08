import React from 'react'
import { Col, Container, Image, Row, Table } from 'react-bootstrap'
import {MdSendToMobile } from 'react-icons/md'
import {AiOutlineMail } from 'react-icons/ai'
const Contact = () => {
  return (
    <>
        <Container style={{marginTop: '50px'}}>
            <Row>
                <Col md={6}>
                    <h1>Pizza Bazar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laboriosam explicabo. Accusantium id fugit et quidem quaerat sapiente ad aliquid, ducimus dolorem eaque consectetur repellendus velit. Ullam explicabo doloribus praesentium et quis facilis inventore commodi! Voluptate provident, nihil quidem repellat nam saepe beatae! Nobis magnam expedita officia magni veniam quas, aliquam assumenda eligendi molestiae pariatur dolores vel et, at quibusdam voluptas excepturi soluta neque? Architecto, iusto. Et accusamus obcaecati voluptatem magnam, aliquam ut similique consectetur eligendi laboriosam quae optio rerum vero neque quo, possimus, qui laborum mollitia. Optio, eligendi voluptates. Neque voluptas sapiente qui ipsa quam. Facilis nemo rerum quibusdam repellat dolorum et harum exercitationem eveniet temporibus, molestiae odit animi sit alias ullam id cupiditate quidem? Repudiandae veritatis excepturi voluptates at inventore quis! Ut modi quaerat, quae consequatur recusandae iste neque minima. Quia nihil modi harum itaque dolores officiis non! Harum nesciunt repudiandae quidem, libero debitis voluptatibus provident molestiae maxime molestias sed eveniet praesentium inventore? Porro voluptate inventore qui quidem eveniet magnam tenetur alias sequi, minus provident? Quisquam doloremque magni in animi. At qui enim, accusantium ratione nulla dolores unde, libero deserunt placeat esse quibusdam eveniet numquam voluptatum omnis, culpa nemo natus delectus. Eum sit at esse, dolores tempore voluptatem.</p>
                    <Table striped bordered hover className='text-center'>
                        <thead>
                            <tr>
                                <th className='bg-warning text-center' colSpan={3}>
                                    ------Contact Detail-------
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><MdSendToMobile/></td>
                                <td>Call</td>
                                <td>01700000</td>
                            </tr>
                            <tr>
                                <td><AiOutlineMail/></td>
                                <td>Email</td>
                                <td>babul123@gmail.com</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>


                        </tbody>

                    </Table>
                </Col>
                <Col md={6}>
                    <Image src='/images/pizza-1.jpg' style={{width:'100%', height:'80%'}}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact