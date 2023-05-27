import React from 'react'
import './work.css'
import home from '../../../assets/img/home.png'
import home2 from '../../../assets/img/home2.png'
import home3 from '../../../assets/img/home3.png'
import video from '../../../assets/img/video.png'
import arrowline from '../../../assets/img/arrowline.png'
import arrowline2 from '../../../assets/img/arrowline2.png'
import muzesvideo from '../../../assets/img/muzesvideo.mp4'
import { Icon } from '@iconify/react';
import { useState, useRef } from 'react'


export default function work() {



    const myvideo = useRef(null);
    const [paused, setPaused] = useState(false);

    function handlePlayVideo() {
        if (paused) {
            setPaused(false);
            myvideo.current.play();
        } else {
            setPaused(true);
            myvideo.current.pause();
        }
    }

        


    return (
        <>

            <section className='fstsec'>

                <div className='work'>
                    <h1>How it works</h1>
                </div>

                <div id='flexsection' className='container-fluid align-items-center '>
                    <div id='worksonwork ' className='row  mx-5 justify-content-center align-items-center '>
                        <div className="col-lg-3 col-md-6 col-sm-12 my-3 "  >

                            <div className="card workCard mx-2" style={{ border: 'none', }}>
                                <img id='home123' className='img-fluid home' src={home} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Vendor</h5>
                                    <p className="card-text">Apply to become a preferred vendor against buyer’s requirements</p>

                                </div>
                            </div>
                        </div>

                        <div className='col-md-1'>
                            <img id='arrowline' className='img-fluid ' src={arrowline} class="card-img-top" alt="..." />
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 my-3 "  >

                            <div className="card workCard mx-2" style={{ border: 'none', }}>
                                <img id='home123' className='img-fluid home' src={home2} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Muzes Platform</h5>
                                    <p className="card-text">Provides a vetted vendor list of vendors that meet specific requirements of buyer</p>

                                </div>
                            </div>




                        </div>
                        <div className='col-md-1'>
                            <img id='arrowline2' className='img-fluid ' src={arrowline2} class="card-img-top" alt="..." />
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 my-3 "  >

                            <div className="card workCard mx-2" style={{ border: 'none', }}>
                                <img id='home123' className='img-fluid home' src={home3} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Buyers</h5>
                                    <p className="card-text">Add your requirements to the Muzes platform.</p>

                                </div>
                            </div>




                        </div>
                    </div>
                </div>


                <div className='learnmore'>Learn more
                    <i id='rightarrow' className="fa-regular fa-circle-right"></i> </div>
                <br />

            </section>
            <br /><br />
            <div className='video'>
                <video id='video' className='video' autoPlay muted loop ref={myvideo}  onClick={() => { handlePlayVideo() }} >
                    <source src={muzesvideo} type="video/mp4" />
                </video>

            <div className='playbtn'>
            {
                paused 
                ?<Icon className='playicon' icon="material-symbols:play-circle-outline" onClick={() => { handlePlayVideo() }} />
                :
                <Icon className='playicon' icon="material-symbols:pause-circle-outline" onClick={() => { handlePlayVideo() }} /> 
            }


                </div>

            </div>
 

        </>
    )
}



