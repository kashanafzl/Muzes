import React from 'react'
import Business from '../../components/website/Business/Business'
import Footer from '../../components/website/Footer/Footer'
import Line from '../../components/website/Linework/Line'
import Mainsection from '../../components/website/Mainsection/Mainsection'
import Navbar from '../../components/website/Nav/Navbar'
import Services from '../../components/website/Services/Services'
import Work2 from '../../components/website/Work2/Work2'
import Work from '../../components/website/Works/Work'


export default function Home() {
  return (
    <>
        <Navbar/>
        <Mainsection/>
        <Work/>
        <Services/>
        <Line/>
        <Work2/>
        <Business/>
        <Footer/>
        
    </>
  )
}
