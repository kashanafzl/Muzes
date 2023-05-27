import React from 'react'
import './Nav.css'
import { Icon } from '@iconify/react';
import dani from '../../../../assets/img/userPic.png'

export default function Nav() {
    return (
        <>
            
                <div id='mainsecnav' className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-9'>
                            <div id='inputid'>
                                <input id='inputser' type="text" placeholder='Search...' />
                                {/* <Icon icon="ph:magnifying-glass-light" /> */}

                            </div>
                        </div>

                        <div className='col-sm-3'>


                            <div id='daniflex'>
                                <div>
                                <Icon className='bellicon' icon="mdi:bell-badge-outline" />
                                </div>
                                <div>
                                    <img className='userNavpic' src={dani} alt="" />
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
        </>
    )
}
