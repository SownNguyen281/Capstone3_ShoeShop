import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/FooterHome/Footer'
import Header from '../../Components/HeaderHome/Header'

export default function HomeTemplate(props) {
  return (
    <div>
      <Header/>
      <div style={{minHeight:650}}>
          <Outlet></Outlet>

        </div>
        
      <Footer/>
    </div>
  )
}
