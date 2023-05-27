import React from 'react'
import './Singlecompany.css'
import { Container, Row, Col } from 'react-bootstrap';
import Members from './SingleCompany/Members';

export default function SingleCompany() {
  return (
    <>


    <Container className="vendor_dash" fluid >
        <Row>
            <Col>
                <div className="dashHead_Text">
                    <h2>Company X</h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="dash_States">
                    <div className="state_Head">
                        <h5>
                        Product Xyz
                        <div className='fstparagraph'>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        </h5>
                    </div>
                    <Row>
                        <Col md={3}>
                            <Members state="matching" />
                        </Col>
                        <Col md={3}>
                            <Members state="matching" />
                        </Col>
                        <Col md={3}>
                            <Members state="matching" />
                        </Col>
                        <Col md={3}>
                            <Members state="matching" />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
</>
  )
}
