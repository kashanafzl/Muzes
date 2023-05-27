import React from 'react'
import './Blog.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import blog1 from '../../../../assets/img/blog1.png';
import blog2 from '../../../../assets/img/blog2.png';
import blog3 from '../../../../assets/img/blog3.png';
import blogimg from '../../../../assets/img/blogimg.png';
import { Icon } from '@iconify/react';

export default function Blog() {
    return (
        <>
            <section id='blogsec'>

                <Container>

                    <div>
                        <h1 className='blogheading'>Recent Jobs</h1>
                    </div>

                </Container>


                {/* blogs */}

                <Container id='blogcontainer'>

                    <Row >

                        <Col className='my-3' lg={4} md={6} sm={12}>
                            <Card id='card1' style={{ width: '20rem' }}>
                                <Card.Img id='blogpics' variant="top" src={blog1} />
                                <Card.Body>

                                    <Row>

                                        <Col lg={5} md={6} sm={12}>
                                            <h2 className='blogh1'>RFP 01</h2>
                                            <h3 className='blogp'>IT Department</h3>
                                            <p className='bloglastp'>Technology</p>




                                        </Col>

                                        <Col lg={7} md={6} sm={12}>
                                            <Card.Img variant="top" className='blogimg' src={blogimg} />
                                            <Icon id='doticon' icon="ph:dots-three-vertical-bold" />


                                            <div>

                                            </div>
                                            <div className='blogbutton'>
                                                <button className='lastbtnofblog'>Fill Out RFP</button>
                                            </div>
                                        </Col>

                                    </Row >

                                </Card.Body>
                            </Card>
                        </Col>




                        <Col className='my-3' lg={4} md={6} sm={12}>
                            <Card id='card1' style={{ width: '20rem' }}>
                                <Card.Img id='blogpics' variant="top" src={blog2} />
                                <Card.Body>

                                    <Row>

                                        <Col lg={5} md={6} sm={12}>
                                            <h2 className='blogh1'>RFP 02</h2>
                                            <h3 className='blogp'>Marketing Department</h3>
                                            <p className='bloglastp'>Digital Marketing</p>




                                        </Col>

                                        <Col lg={7} md={6} sm={12}>
                                            <Card.Img variant="top" className='blogimg' src={blogimg} />
                                            <Icon id='doticon' icon="ph:dots-three-vertical-bold" />


                                            <div>

                                            </div>
                                            <div className='blogbutton'>
                                                <button className='lastbtnofblog'>Fill Out RFP</button>
                                            </div>
                                        </Col>

                                    </Row >

                                </Card.Body>
                            </Card>
                        </Col>


                        <Col className='my-3' lg={4} md={6} sm={12}>
                            <Card id='card1' style={{ width: '20rem' }}>
                                <Card.Img id='blogpics' variant="top" src={blog3} />
                                <Card.Body>

                                    <Row>

                                        <Col lg={5} md={6} sm={12}>
                                            <h2 className='blogh1'>RFP 03</h2>
                                            <h3 className='blogp'>HR Department</h3>
                                            <p className='bloglastp'>Management</p>




                                        </Col>

                                        <Col lg={7} md={6} sm={12} >
                                            <Card.Img variant="top" className='blogimg' src={blogimg} />
                                            <Icon id='doticon' icon="ph:dots-three-vertical-bold" />


                                            <div>

                                            </div>
                                            <div className='blogbutton'>
                                                <button className='lastbtnofblog'>Fill Out RFP</button>
                                            </div>
                                        </Col>

                                    </Row >

                                </Card.Body>
                            </Card>
                        </Col>



                    </Row>


                </Container>





            </section>
        </>
    )
}
