import React from 'react'
import NavbarShop from './NavbarShop'
import "./Shop.css"
import Api from './Api'
import ShopFooter from './ShopFooter'
function Shop() {
  return (
    <div className='bodyshop'>
        <NavbarShop/>
        <Api/>
        <ShopFooter/>
    </div>
  )
}

export default Shop