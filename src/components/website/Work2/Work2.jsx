import React from 'react'
import './Work2.css'
import frame2 from '../../../assets/img/frame2.png'
import fst from '../../../assets/img/1.png'
import sec from '../../../assets/img/2.png'
import third from '../../../assets/img/3.png'
import lineimg from '../../../assets/img/lineimg.png'


export default function Work2() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6' >
                        <img className='img-fluid frame' src={frame2} alt="frame" />
                    </div>


                    <div className='col-md-6 mt-5'>
                        <img className='img-fluid lineimg' src={lineimg} alt="" />
                        <div className='flexiconandh6'>
                            <div>
                                <img className='img-fluid fst' src={sec} alt="" />
                            </div>

                            <div>
                                <h6 className='headingsmall1'>1. Wireframing</h6>
                                <p className='headingsmallparagraph1'>Quis nostrud exercitation ullamco laboris <br /> nisi ut aliquip  ex commodo consequat.</p>
                            </div>

                        </div>

                        <div className='flexiconandh6'>
                           <div>
                                <img className='img-fluid sec' src={fst} alt="" />
                            </div>

                            <div>
                                <h6 className='headingsmall1'> 2. Prototype </h6>
                                <p className='headingsmallparagraph1'>Quis nostrud exercitation ullamco laboris <br /> nisi ut aliquip ex commodo consequat.</p>
                            </div>

                        </div>



                        <div className='flexiconandh6'>
                           <div>
                                <img className='img-fluid third' src={third} alt="" />
                            </div>

                            <div>
                                <h6 className='headingsmall1'>3. MVP </h6>
                                <p className='headingsmallparagraph1'>Quis nostrud exercitation ullamco laboris <br /> nisi ut aliquip ex commodo consequat.</p>
                            </div>

                        </div>



                    </div>




                </div>
            </div>
        </>
    )
}
