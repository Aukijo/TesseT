import React, { useState } from 'react'
import style from '../modules/Navbar.module.css'
import { Outlet ,NavLink} from 'react-router-dom'
import Login from './Login'

export default function Navbar() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [showLogin,setShowLogin] = useState(<></>)

  const productClick =(e)=> {
    setShowLogin(<Login></Login>)
  }
  const logoutClick =()=>{
    setisLoggedIn(false)
  }
  return (
    <div>
    <div className={`${style.nav_content}`}>
      <div className={style.logo_cont}>
        <div className={style.logo}>Logo</div>
      </div>
      <div className={style.links_cont}>
        <nav className={style.link_menu}>
          <div className={style.link_list}>
            <NavLink onClick={logoutClick} className={style.link} to='/'>Home</NavLink>
            <NavLink onClick={productClick} className={style.link} 
            to='Products'> Products</NavLink>
            {
              isLoggedIn ? (
                <>
                <NavLink to='Orders' className={style.link}>Orders</NavLink>
                <NavLink to='Orders' className={style.link}>Cart</NavLink>
                </>
              ) : (
                <>
                <NavLink className={style.link} to='About' >About us</NavLink>
                <NavLink className={style.link} to='Contact' >Contact Us</NavLink>
                </>
              )
            }
           
          </div>
        </nav>
        {
         isLoggedIn ? (
          <div className={style.user_icon}>
            User
          </div>
        ) : (
          
         <div className={style.link_options}>
          <div className={style.bar1}></div>
          <div className={style.bar2}></div>
          <div className={style.bar3}></div>
        </div>
          
        )
        }
        
      </div>
    </div>
    <main className={style.nav_router}>
      {showLogin}
      <Outlet></Outlet>
    </main>
    </div>
    
  )
}
