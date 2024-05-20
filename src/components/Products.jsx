import React, { useState } from 'react'
import style from '../modules/Product.module.css'
import { NavLink, Outlet } from 'react-router-dom'
import Category1 from './ProductCategory/Category1'
import Category2 from './ProductCategory/Category2'
import Category3 from './ProductCategory/Category3'
import Category4 from './ProductCategory/Category4'
import Category5 from './ProductCategory/Category5'

export default function Products() {
  const [classChange,setClassChanger] = useState(null)

  const changeClass =(category)=> {
    setClassChanger(category)
   
  }
  return (
    <div>
      <div className={style.promotion}>Put Promotions Here</div>
      <div className={`${style.category_cont} container`}>
        <nav className={style.catogory_menu}>
          <NavLink  
          to="Category1"
          className={`${style.category_items} ${classChange === 'Category1' ? style.category_items_active : ''}`}
          onClick={() => changeClass('Category1')}
        
        >Category 1</NavLink>
          <NavLink 
           to="Category2"
          className={`${style.category_items} ${classChange === 'Category2' ? style.category_items_active : ''}`}
          onClick={() => changeClass('Category2')}

          >Category 2</NavLink>
          <NavLink 
           to="Category3"
          className={`${style.category_items} ${classChange === 'Category3' ? style.category_items_active : ''}`}
          onClick={() => changeClass('Category3')}

          >Category 3</NavLink>
          <NavLink 
           to="Category4"
          className={`${style.category_items} ${classChange === 'Category4' ? style.category_items_active : ''}`}
          onClick={() => changeClass('Category4')}

          >Category 4</NavLink>
          <NavLink 
           to="Category5"
          className={`${style.category_items} ${classChange === 'Category5' ? style.category_items_active : ''}`}
          onClick={() => changeClass('Category5')}

          >Category 5</NavLink>
        </nav>
      </div>
      <main className={`${style.category_products} container`}>
          <Outlet></Outlet>
        </main>
    </div>
  )
}
