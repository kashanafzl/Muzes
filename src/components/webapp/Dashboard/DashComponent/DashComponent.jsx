import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Rfp from './RFP/Rfp';
export default function DashComponent() {
    return (
        <>

            <Container className="vendor_dash" fluid>
                <Row>
                    <Col>
                        <div className="dashHead_Text">
                            <h2>Dashoard</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="dash_States">
                            <div className="state_Head">
                                <span className="state_indicate matching">

                                </span>
                                <h5>
                                    Waiting for Results
                                </h5>
                            </div>
                            <Row>
                                <Col md={3}>
                                    <Rfp state="matching" />
                                </Col>
                                <Col md={3}>
                                    <Rfp state="matching" />
                                </Col>
                            </Row>
                            <div className="state_Head">
                                <span className="state_indicate discovery">
                                </span>
                                <h5>
                                    In Discovery
                                </h5>
                            </div>
                            <Row>
                                <Col md={3}>
                                    <Rfp state="discovery" />
                                </Col>
                            </Row>
                            <div className="state_Head">
                                <span className="state_indicate verified">
                                </span>
                                <h5>
                                    Verified
                                </h5>
                            </div>
                            <Row>
                                <Col md={3}>
                                    <Rfp state="verified" />
                                </Col>
                                <Col md={3}>
                                    <Rfp state="verified" />
                                </Col>
                            </Row>
                            <div className="state_Head">
                                <span className="state_indicate deal">
                                </span>
                                <h5>
                                    Deal
                                </h5>
                            </div>
                            <Row>
                                <Col md={3}>
                                    <Rfp state="deal" />
                                </Col>
                                <Col md={3}>
                                    <Rfp state="deal" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
