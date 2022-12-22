import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/FooterHome/Footer'
import Header from '../../Components/HeaderHome/Header'

export default function UserTemplate() {
    return (
        
           
    <div>
                <Header/>

                <div className='h-100 w-50 d-flex justify-content-center align-items-center m-auto' style={{ minHeight: '100vh' }}>
                    <Outlet />
                </div>

                <Footer/>
    </div>

       
    )
}
