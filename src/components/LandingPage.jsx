import React from 'react'
import style from '../modules/LandingPage.module.css'
import showcase from '../resources/components.png'
export default function ContentHolder() {
  return (

    
    <div className={`${style.landing_content}`}>
      <div className={style.taglines_cont}>
        <div className={style.content1}>
            <div className={style.phrase1}>
              <h1> Reliable Components and Pre-Built PCs <br/> for <br/> Hardcore Gamers  </h1>
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
      <div className={style.component_img_cont}>
        <img className={style.component_img} src={showcase} alt="components" />
      </div>
      
      
    
    
    </div>
  )
}
