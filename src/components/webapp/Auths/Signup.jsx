import React from 'react'
import './Signup.css'
import muzeslogo from '../../../assets/img/logo.png'
import google from '../../../assets/img/google.png'
import loginpic from '../../../assets/img/loginpic.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Signup() {
    return (
        <>
            <section id='del'>
                <Container>
                <Row>
                    <Col md={6} sm={12}>
                    <div className='leftside'>
                        <div>
                            <img className='muzeslogo' src={muzeslogo} alt="" />
                        </div>

                        <div>
                            <h1 className='muzesheading'> Welcome To Muzes </h1>
                            <p className='muzespara'>Please enter your Credentials to Access your account</p>
                        </div>

                        <div>
                            <label className='labell'>Your Name</label>
                        </div>

                        <div>
                            <input className='inputfield' type="text" placeholder='Your Name' />
                        </div>

                        <div>
                            <label className='labell'>Enter Email</label>
                        </div>

                        <div>
                            <input className='inputfield' type="text" placeholder='Enter Email' />
                        </div>

                        <div>
                            <label className='labell'>Password</label>
                        </div>

                        <div>
                            <input className='inputfield' type="text" placeholder='Password' />
                        </div>

                        <p className='forgetpara'>Forgot password</p>

                        <div>
                            <button className='loginbutton'>Get Started</button>
                        </div>

                        <div className='lastborder'>
                            <img className='googlelogo' src={google} alt="" />
                            <p className='lastpara2'>Sign up with Google</p>
                        </div>

                        <div>
                            <p className='lastline'>Already have an account ?</p>
                        </div>

                    </div>
                    </Col>


                    <Col>
                    <div>
                        <img className='img-fluid loginpic' src={loginpic} alt="" />
                    </div>
                    </Col>

                    
                </Row>

                </Container>




            </section>
        </>
    )
}
