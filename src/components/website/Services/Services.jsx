import React from 'react'
import './Services.css'
import frame from '../../../assets/img/frame.png'
import icon1 from '../../../assets/img/icon1.png'
import icon2 from '../../../assets/img/icon2.png'
import icon3 from '../../../assets/img/icon3.png'
import icon4 from '../../../assets/img/icon4.png'

export default function Services() {
  return (
   <>
   <div className='container mt-5'>
    <div className='row'>
        <div className='col-md-6' >
            <img className='img-fluid  frame' src={frame} alt="frame" />
        </div>

        
        <div className='col-md-6 mt-4'>
            <div  className='flexiconandh6'>
                <div style={{marginTop : '-45px'}}>
                    <img className='img-fluid  icon1' src={icon1} alt="" />
                </div>

                <div>
                    <h6 className='headingsmall'> Saas Growth </h6>
                    <p className='headingsmallparagraph'>The SaaS industry has grown 5x in the last 7 <br /> years to $185B.</p>
                    </div>

                    </div>

                    <div  className='flexiconandh6'>
                <div style={{marginTop : '-45px'}}>
                    <img className='img-fluid icon1' src={icon2} alt="" />
                </div>

                <div>
                    <h6 className='headingsmall'> Saas Applications </h6>
                    <p className='headingsmallparagraph'>Organizations use around 110+ SaaS <br /> applications.</p>
                    </div>

                    </div>

                    <div  className='flexiconandh6'>
                <div style={{marginTop : '-45px'}}>
                    <img className='img-fluid  icon1' src={icon3} alt="" />
                </div>

                <div>
                    <h6 className='headingsmall'> Saas Product  </h6>
                    <p className='headingsmallparagraph'>These organizations spend on average <br /> $3Million+ annually on SaaS products.</p>
                    </div>

                    </div>

                    <div  className='flexiconandh6'>
                <div style={{marginTop : '-45px'}}>
                    <img className='img-fluid icon1' src={icon4} alt="" />
                </div>

                <div>
                    <h6 className='headingsmall'>Technology Purchases </h6>
                    <p className='headingsmallparagraph'>Companies annually burn up to $150,000 <br />  unused or duplicate technology purchases</p>
                    </div>

                    </div>

            

            </div>

            


    </div>
   </div>
   </>
  )
}
