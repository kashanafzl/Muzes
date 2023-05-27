import React from 'react'
import './Center.css'
import { Icon } from '@iconify/react';
import dpic from '../../../../assets/img/3dpic.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Blog from '../Blogs/Blog';

export default function Center() {
    return (
        <>

            <section id='centerid'>


            <Container>
                <div>
                    <h1 className='marketheading'>MarketPlace</h1>
                </div>
                </Container>


                <Container id='bgcontainer' >
                    <Row>
                        <Col sm={8}>
                            <h1 id='heaindfst' >Discover, Your jobs <br /> as Vendor</h1>
                            <p id='paraheadingmarket'>Lorem ipsum dolor sit amet</p>

                            <button id='btnoran'>
                            <Icon id='oranicon' icon="ic:sharp-search" /> Explore Jobs 
                            </button>

                        </Col>




                        <Col sm={4}> 
                            <img  className='dpic' src={dpic} alt="" />
                        </Col>
                    </Row>

                </Container>

                <br/>






            </section>
            <Blog/>

        </>
    )
}
