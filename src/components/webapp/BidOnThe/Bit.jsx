import React from 'react'
import './Bit.css'
import muzeslogo from '../../../assets/img/logo.png'
import daniyal from '../../../assets/img/userPic.png'
import { Icon } from '@iconify/react'


export default function Bit() {
    return (
        <>
            <section className='del2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <img className='muzes2logo' src={muzeslogo} alt="" />
                        </div>
                        <div className='col-md-3'>
                            <div id='daniflex'>
                                <div>
                                    <img className='daniyal' src={daniyal} alt="" />
                                </div>
                                <div>
                                    <p className='danip'>Daniyal Khan</p>
                                </div>
                                   <div>
                                         <Icon className='arrowicon' icon="ri:arrow-drop-down-line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='cardcenter'>
                    <div id='cen'>
                        <h1 className='headbid'>Bid on the RFP</h1>
                        <p className='lorempara'>Lorem ipsum dolor sit amet consectetur. Ultrices.</p>

                        <div className='leftt'>
                            <label className='labee'>About Company</label>
                        </div>
                        <div className='leftt'>
                            <input className='inpute' type="text" placeholder='Your Company' />
                        </div>
                        <div className='leftt'>
                            <label className='labee'>Service Offered</label>
                        </div>
                        <div className='leftt'>
                            <input className='inpute' type="text" placeholder='Services' />
                        </div>
                        <div className='leftt'>
                            <label className='labee'>Cost</label>
                        </div>
                        <div className='leftt'>
                            <input className='inpute' type="text" placeholder='$$' />
                        </div>
                        <div className='leftt'>
                            <label className='labee'> Timeline</label>
                        </div>
                        <div className='leftt'>
                            <input className='inpute' type="text" />
                        </div>
                        <button className='lastbtn'>Submit for evaluation </button>
                    </div>
                </div>
            </section>

        </>
    )
}
