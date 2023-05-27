import { Icon } from '@iconify/react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/img/logo.png';
import {SidebarData} from './SidebarData';
import './Sidebar.css'
export default function RightSidebar() {
  return (
    <>
    <div className="main_Sidebar">
        <div className="side_bar">
            <div className="side_bar_logo">
                <div className="logo_Image">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="sidebar_Links">
                <ul className="rightSidebar_links">
                    {
                        SidebarData.map((ele,index)=>
                        <li key={index}>
                            <NavLink end  className='single_Link' to={ele.path}>
                            <Icon icon={ele.icon}/>
                            <span>
                            {ele.title}
                            </span>
                            
                    </NavLink>
                        </li>
                        )

                    }
                </ul>
            </div>
            <div className="sidebar_footer">
                <div className="signoutBtn">
                    <div className="sign_out">
                        <div className="signoutIcon">
                            <Icon icon={'mdi-light:logout'}/>
                        </div>
                        <span>Sign out</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
