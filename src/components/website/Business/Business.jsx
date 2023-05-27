import React from 'react'
import './Business.css'
import home from '../../../assets/img/11.png'
import home2 from '../../../assets/img/22.png'
import home3 from '../../../assets/img/33.png'

export default function Business() {
    return (
        <>
           



            <section className='secsec'>

                <div className=' Business'>
                    <h1> Business Benefits</h1>
                </div>


                <div id='flexsection'  className='container mt-5'>
                    <div className='row mx-3  justify-content-center align-items-center'>
                        <div className="card mx-2 my-3" style={{ width: '20rem', border: 'none', }}>
                            <img id='home1234' className='img-fluid home' src={home} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Vendor</h5>
                                <p className="card-text">Lorem Ipsum

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                {/* <img  className='img-fluid arrowline' src={arrowline} className="card-img-top" alt="..."/> */}
                            </div>
                        </div>





                        <div className="card mx-2 my-3" style={{ width: '20rem', border: 'none', }}>
                            <img id='home1234' className='img-fluid home' src={home2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Muzes Platform</h5>
                                <p className="card-text">Lorem Ipsum

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                            </div>
                        </div>



                        <div className="card mx-2 my-3" style={{ width: '20rem', border: 'none', }}>
                            <img id='home1234' className='img-fluid home' src={home3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Buyers</h5>
                                <p className="card-text">Lorem Ipsum

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

                            </div>
                        </div>

                    </div>
                </div>
                <br /><br /><br /><br />




            </section>


        </>
    )
}
