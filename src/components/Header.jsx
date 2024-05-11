import React, { useState } from 'react'
import header_style from '../modules/Header.module.css'
import show from '../resources/ProfileAsset 1.svg'
import hide from '../resources/ProfileAsset 3.svg'
import Links from './Links'

export default function Header() {
  const [shown,setShown] = useState(true);
  const [icon,setIcon] = useState(show);
  
  const showLinks =()=>{
   setIcon(icon === show ? hide:show)

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

          <button onClick={showLinks} className={header_style.show_button}>
            <img className={header_style.show_link} src={icon} alt={shown ? "Hidden":"Shown"} />
          </button>
          
        </div>
        <div className={header_style.nav_menu}>
          <Links/>
        </div>
      </div>
    </div>
  )
}
