import React from 'react'
import './Footer.css'
import logo from '../../../assets/img/logo.png'
import icon5 from '../../../assets/img/icon5.jpeg'

export default function Footer() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-fluid footerlogo' src={logo} alt="" />
                        <p className='footerp'>Lorem Ipsum Dollar sit amit</p>
                        <div>
                            <div>
                                <input className='textinput' type="text" placeholder='Enter you email here' />
                                <img className='icon4' src={icon5} alt="" />
                                <div>
                                    <p className='footeraddreessp'>© 2022 Muzes Inc. Copyright and rights reserved</p>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                    <div className='col-md-3'>
                        <h6 className='footerlinksp'>Social Links</h6>
                        <ul className='ulweb' style={{ flexDirection: 'column', gap: '0px', marginBottom: '20px' }}>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
