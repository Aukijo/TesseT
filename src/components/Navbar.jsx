import React from 'react'
import style from '../modules/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={`${style.nav_content} container`}>
      <div className={style.logo_cont}>
        <div className={style.logo}>Logo</div>
      </div>
      <div className={style.links_cont}>
        <ul className={style.link_menu}>
          <li className={style.link_list}>
            <a href="" className={style.link}>Home</a>
          </li>
          <li className={style.link_list}>
            <a href="" className={style.link}>Products</a>
          </li>
          <li className={style.link_list}>
            <a href="" className={style.link}>About us</a>
          </li>
          <li className={style.link_list}>
            <a href="" className={style.link}>Contact Us</a>
          </li>
        </ul>
        <div className={style.link_options}>
          <div className={style.bar1}></div>
          <div className={style.bar2}></div>
          <div className={style.bar3}></div>
        </div>
      </div>

    </div>
  )
}
