import React from 'react';
import './Business.css';
import home from '../../../assets/img/11.png';
import home2 from '../../../assets/img/22.png';
import home3 from '../../../assets/img/33.png';

export default function Business() {
    return (
        <section className='business-section'>
            <div className='business-header'>
                <h1>Business Benefits</h1>
            </div>

            <div id='flexsection' className='container mt-5'>
                <div className='row mx-3 justify-content-center align-items-center'>
                    <div className="card mx-2 my-3" style={{ width: '20rem', border: 'none' }}>
                        <img className='img-fluid home-img' src={home} alt="Vendor" />
                        <div className="card-body">
                            <h5 className="card-title">Vendor</h5>
                            <p className="card-text">
                                Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>
                    </div>

                    <div className="card mx-2 my-3" style={{ width: '20rem', border: 'none' }}>
                        <img className='img-fluid home-img' src={home2} alt="Muzes Platform" />
                        <div className="card-body">
                            <h5 className="card-title">Muzes Platform</h5>
                            <p className="card-text">
                                Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>
                    </div>

                    <div className="card mx-2 my-3" style={{ width: '20rem', border: 'none' }}>
                        <img className='img-fluid home-img' src={home3} alt="Buyers" />
                        <div className="card-body">
                            <h5 className="card-title">Buyers</h5>
                            <p className="card-text">
                                Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
