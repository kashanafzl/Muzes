import { Icon } from '@iconify/react';
import React from 'react'
import { Row, Col } from 'react-bootstrap';
import tempImg from  '../../../../../assets/img/userPic.png'
import "./Rfp.css"
export default function Rfp({state}) {
    return (
        <>
            <div className="rfpCard">
                <Row className='rfpSec_Head'>
                    <Col>
                        <div className="rfp_name">
                            <span>
                                RFP 01
                            </span>
                        </div>
                    </Col>
                    <Col>
                    <div className="buyer_Info">
                        <div className="buyer_avatar">
                            <img src={tempImg} alt="" />
                        </div>
                        <div className="More_Info">
                            <div className="more_">
                                <Icon icon="mdi:dots-vertical"/>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row className='rfpSec_time'>
                    <Col>
                    <div className="time_Created rfp_vendor">
                        <div className="clckIcon">
                            <Icon icon="ph:clock-light"/>
                        </div>
                        <div className="clckTime">
                            <span>Wed, 12 Jan ~ Thu, 31 Mar</span>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row className='rfpSec_result'>
                    <Col>
                    <div className="rfp_results">
                        <div className={`resultText ${state}`}>
                        <span>Matching Result</span>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row className='rfpSec_Desc'>
                <Col>
                <div className="rfp_Desc">
                    <p className="rfp_Text">
                    Lorem ipsum dolor sit amet
                     consectetur. Sit quis et facilisi.
                    </p>
                </div>
                </Col>
                </Row>
            </div>
        </>
    )
}
