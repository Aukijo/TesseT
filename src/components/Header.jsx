import React, { useState } from 'react'
import header_style from '../modules/Header.module.css'
import show from '../resources/ProfileOpen.svg'
import hide from '../resources/ProfileClose.svg'
import Links from './Links'

export default function Header() {
  const [shown,setShown] = useState(true);
  const [icon,setIcon] = useState(show);
  
  const [showMenu,setShowMenu] = useState(header_style.nav_menu_close)
  const buttonChange =()=>{
   setIcon(icon === show ? hide:show)
   setShowMenu(showMenu === header_style.nav_menu_close ? header_style.nav_menu_open:header_style.nav_menu_close)
  }

  return (

    
    <div>
      <div className={header_style.navbar}>
        <div className={header_style.nav_cont1}>
          <div className={header_style.nav_logo}>
            <h1 className={header_style.brand_name}>TESSET</h1>
          </div>
        </div>
        <div className={header_style.nav_cont2}>
         
        </div>
        <div className={header_style.nav_cont3}>
          <ul className={header_style.nav_links}>
            <li className={header_style.links}>
              Home
            </li>
            <li className={header_style.links}>
              Products
            </li>
            <li className={header_style.links}>
              About
            </li>
            <li className={header_style.links}>
              Contact Us
            </li>
          </ul>

          <button onClick={buttonChange} className={header_style.show_button}>
            <img className={header_style.show_link} src={icon} alt={shown ? "Hidden":"Shown"} />
          </button>
          
        </div>
      </div>

      <div className={showMenu}>
          <Links/>
        </div>
    </div>
  )
}
