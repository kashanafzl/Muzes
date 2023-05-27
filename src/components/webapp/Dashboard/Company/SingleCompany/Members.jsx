import React from 'react'
import { Row, Col } from 'react-bootstrap';
import tempImg from  '../../../../../assets/img/userPic.png'
import { Icon } from '@iconify/react';
import '../../DashComponent/RFP/Rfp.css'
import './Member.css'

export default function Members({state}) {
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
        
        <Row className='rfpSec_result'>
            <Col>
            <div className="rfp_results0">
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
        
        <div>
            <button className='lastbtncompany'>Book a Meeting</button>
        </div>



        </Col>
        </Row>
    </div>
</>
  )
}
