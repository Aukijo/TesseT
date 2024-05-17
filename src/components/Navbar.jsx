import React from 'react'
import style from '../modules/Navbar.module.css'
import { Outlet ,NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <div className={`${style.nav_content}`}>
      <div className={style.logo_cont}>
        <div className={style.logo}>Logo</div>
      </div>
      <div className={style.links_cont}>
        <nav className={style.link_menu}>
          <div className={style.link_list}>
            <NavLink className={style.link} to='/'>Home</NavLink>
            <NavLink className={style.link} to='Products' >Products</NavLink>
            <NavLink className={style.link} to='About' >About us</NavLink>
            <NavLink className={style.link} to='Contact' >Contact Us</NavLink>
          </div>
        </nav>
        <div className={style.link_options}>
          <div className={style.bar1}></div>
          <div className={style.bar2}></div>
          <div className={style.bar3}></div>
        </div>
      </div>
    </div>
    <main className={style.nav_router}>
      <Outlet></Outlet>
    </main>
    </div>
    
  )
}
