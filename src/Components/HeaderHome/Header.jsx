import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
  return (
    <div className='header'>

      <section className='logo-header' >
        <div className='logo'>
            <NavLink className={'logo-link'} to="">
              <img src="https://sneakerdaily.vn/wp-content/uploads/2020/08/logo-adidas-3.jpg" alt="logo" />
            </NavLink>
        </div>
        <div className="nav-bar-search">
          <div className="search flex-item">
            <NavLink className={'search-link'} to='/search'>
              
              <i className='fa fa-search'></i> Search
            </NavLink>
          </div>
          <div className="carts flex-item">
            <NavLink className={'carts-link'} to='/cart' >
              <i className='fa fa-cart-plus'></i> (1)
            </NavLink>
          </div>
          <div className="login flex-item">
            <NavLink className={'login-link'} to='/login' >Login</NavLink>
          </div>
          <div className="register flex-item">
            <NavLink className={'register-link'} to='/register'>Register</NavLink>
          </div>
        </div>
      </section>
      <section className='menu'>
        <div className="nav-menu">
        <NavLink to=''>Home</NavLink>
        <NavLink to=''>Men</NavLink>
        <NavLink to=''>Woman</NavLink>
        <NavLink to=''>Kid</NavLink>
        <NavLink to=''>Sport</NavLink>
        </div>
        
      </section>
    </div>


  )
}
