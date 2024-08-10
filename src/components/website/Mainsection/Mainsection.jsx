import React from 'react'
import './Mainsection.css'

import purple from '../../../assets/img/purple.png';
import yellow from '../../../assets/img/yellow.png'
import laptop from '../../../assets/img/laptop.png'
import puepleside1 from '../../../assets/img/puepleside1.png'
import puepleside2 from '../../../assets/img/purpleside2.png'
import image14 from '../../../assets/img/handImage.png'



export default function Mainsection() {
    return (
        <>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <h1 className='fstheading'>Redefining the <span className='fstspan'> 
                        <br /> B2B marketplace </span> with Trust, Transparency <br /> and AI</h1>
                    </div>

                    {/* <div className='col-md-6 col-sm-12'>
                    <img className='img-fluid  purplepic' src={purple} alt="purple" />
                    </div> */}

                    <div className='col-md-6 col-sm-12'>
                        <div className='mainpupleabso'>

                            <div className='pruplebg'>

                            <b>     For Procurement & Budget holders ...</b> <br />

                                <div class="typewriter1">
                                <p className='paraanimation'>Access to curated vetted vendors list Bring security </p>
                                </div>

                                <div class="typewriter2">
                                <p className='paraanimation'>& compliance to the forefront of decision making</p>
                                </div>


                                <div class="typewriter3">
                                <p className='paraanimation'>Increase transparency of vendor capabilities</p>
                                </div>


                                <div class="typewriter4">
                                <p className='paraanimation'>Increase user adoption, improve ROI</p>
                                </div>


                              
                                
                            </div>

                            <div>
                                <img className='purpleside1' src={puepleside1} alt="" />
                            </div>

                            <div>
                                <img className='purpleside2' src={puepleside2} alt="" />
                            </div>

                        </div>


                    </div>




                </div>
            </div>

            <div className='buttonflex'>
                <div>
                    <button className='btnflex2'>Get Started</button>
                    <button className='outlinebutton'>How it works
                        <i id='playicon' class="fa-solid fa-circle-play"></i>
                    </button>

                </div>


                <div className='col-md-6 col-sm-12'>

                    <div className='mainpupleabso'>

                        <div className='yellowbg'>
                             <b> For Sales Teams ...</b> <br />
                               
                            
                                <div class="typewriter5">
                                <p className='paraanimation'> No more cold outreach Meet decision <br />
                                 makers faster </p>
                                </div>

                                <div class="typewriter6">
                                <p className='paraanimation'> Instant feedback on lead generation efforts </p>
                                </div>


                                <div class="typewriter7">
                                <p className='paraanimation'>  Increase customer satisfaction & Increase</p>
                                </div>


                                <div class="typewriter8">
                                <p className='paraanimation'> transparency of vendor capabilities  retention </p>
                                </div>

                                <div class="typewriter9">
                                <p className='paraanimation'> Increase transparency on buyer’s requirements.</p>
                                </div>


                              

                                        <div>
                                        <img className='image14' src={image14} alt="" />
                                        </div>

                                        </div>

                      
                    



                    </div>


                </div>

            </div>

            <div className='laptop'>
                <img className='img-fluid lap ' src={laptop} alt="laptop" />
            </div>







        </>
    )
}





