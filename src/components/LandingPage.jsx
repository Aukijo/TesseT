import React from 'react'
import style from '../modules/LandingPage.module.css'
import showcase from '../resources/ExplodedView.png'
export default function ContentHolder() {
  return (
    <div className={`${style.landing_content} container`}>
      
        <div className={style.content1}>
          <div className={style.phrase1}>
            <h1> Reliable Components and Pre-Built PCs for Hardcore Gamers  </h1>
          </div>
          <div className={style.phrase2}>
            <p>Our products features the latest cutting-edge technology, ensuring top-tier performance for Gamers, Content Creators, and Tech Enthusiasts.</p>
          </div>
        </div>
        <div className={style.content2}>
          <div className={style.actionButton}>
            <button className={style.action1}>Components</button>
          </div>
          <div className={style.actionButton}>
            <button className={style.action2}>Pre-Built PC</button>
          </div>
        </div>
      
    
    
    </div>
  )
}
