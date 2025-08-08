import React from 'react'
import './Product1.css'
import NavbarShop from '../Shop page/NavbarShop'
import ShopFooter from '../Shop page/ShopFooter'
import Product1Api from './Product1Api'
function Product1() {
  return (
    <div className='bodyp1'>
      <NavbarShop/>
     <Product1Api/>
    <ShopFooter/>
    </div>
  )
}

export default Product1
