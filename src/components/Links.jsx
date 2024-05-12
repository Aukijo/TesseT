import React from 'react'
import links_style from '../modules/Links.module.css'
export default function Links() {
  return (
    <div>
        <div className={links_style.nav_links}>
            <a href="/" className={links_style.links}>Home</a>
            <a href="/" className={links_style.links}>Products</a>
            <a href="/" className={links_style.links}>About</a>
            <a href="/" className={links_style.links}>Contact Us</a>
          </div>
    </div>
  )
}