import React from 'react'
import './Match.css'
import muzeslogo from '../../../assets/img/logo.png'
import daniyal from '../../../assets/img/userPic.png'
import { Icon } from '@iconify/react';

export default function Match() {
  return (
    <>
            <section className='mainsection'>
            <div className='container'>
                    <div className='row'>
                        <div className='col-sm-9'>
                            <img className='muzes2logo' src={muzeslogo} alt="" />
                        </div>
                        <div className='col-sm-3 '>
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

           

                <div className='matchbackground'>
                        <h1 className='matchheading'>Matching Your RFP</h1>

                        <div id='centericon'>
                         <Icon className='systemicon' icon="fluent-mdl2:processing" />
                        </div>

                        <div className='matchbtn1'>
                            <button className='matchbtn'>Go to Dashboard</button>
                        </div>
                </div>


                </section>
    </>
  )
}
