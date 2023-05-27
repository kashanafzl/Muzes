import React from 'react'
import RightSidebar from '../../../components/webapp/Dashboard/RightSidebar/RightSidebar'
import Nav from '../../../components/webapp/Dashboard/Nav/Nav'
import { Outlet } from 'react-router-dom';

export default function Marketplace() {
  document.body.style = 'background: #FBFBFB;';
  return (
    <div>
      <RightSidebar />
      <div id='maindiv'>
        <Nav />
        <Outlet/>
      </div>
    </div>
  )
}
