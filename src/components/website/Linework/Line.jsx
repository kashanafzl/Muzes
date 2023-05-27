import React from 'react'
import './Line.css'
import line from '../../../assets/img/line.png'

export default function Line() {

    return (

        <>
            <section className='sectionsec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mt-5'>
                            <img className='img-fluid line' src={line} alt="" />
                        </div>

                        <div className='col-md-6 mt-5'>
                            <div className='loading'>

                                <div style={{ '--i': 1 }}>
                                    <span>  AI Powered Vendor vetting: “Keeping security and compliance at the forefront to help simplify vendor selection process”</span>
                                    
                                </div>

                                <div style={{ '--i': 2 }}>
                                    <span> AI Powered Vendor vetting: “Keeping security and compliance at the forefront to help simplify vendor selection process”</span>
                                  
                                </div>

                                <div style={{ '--i': 3 }}>
                                    <span>AI Powered Vendor vetting: “Keeping security and compliance at the forefront to help simplify vendor selection process”</span>
                                  
                                </div>

                                <div style={{ '--i': 4 }}>
                                    <span>AI Powered Vendor vetting: “Keeping security and compliance at the forefront to help simplify vendor selection process”</span>
                                    
                                </div>

                            </div>



                            {/* <img src={animation} alt="" />   */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
