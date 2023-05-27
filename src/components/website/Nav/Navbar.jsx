import React from 'react'
import './Navbar.css'
import logo from '../../../assets/img/logo.png'


export default function Navbar() {
  return (
   <>
    
    {/* <div className='fstflex'>
        <div>
            <img className='img-fluid logo' src={logo} alt="pic" />
        </div>

        <div>
            <ul className='ulweb'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact Us</a></li>
            
            
            </ul>
        </div>

        <div>
            <button className='navbarbtn'>Get Started</button>
        </div>
    </div> */}

<div className='container'>
    
<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
  <img className='img-fluid logo' src={logo} alt="pic" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id='flexicon' className="navbar-nav me-auto mb-2 mb-lg-0 "  >
        {/* <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}

       <div id='flexicon'>
       <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
       </div>
       
      </ul>

      
      <div>
                <button className='navbarbtn'>Get Started</button>
        </div>

    
    </div>

  </div>
</nav>
</div>
   </>
  )
}
