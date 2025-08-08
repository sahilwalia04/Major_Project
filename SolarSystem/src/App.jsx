import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Component/Home Page/Home';
import Shop from './Component/Shop page/Shop';
import Product1 from './Component/ShopProduct1/Product1';
import ShowItem from './Component/ShopProduct1/ShowItem';
import Addtocart from './Component/AddCart/Addtocart';
import Checkout from './Component/Checkout/Checkout';
import Address from './Component/Address page/Address';
import Login from './Component/Login&Signup/Login';
import Signin from './Component/Login&Signup/Signin';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import ProtectedRoute from './Component/ProtectiveRoutes/ProtectedRoute';
import { ToastContainer } from 'react-toastify'
import {GoogleOAuthProvider} from '@react-oauth/google'
function App() {
  const GoogleAuthWrapper = ()=>{
    return (
      <div>
        <GoogleOAuthProvider clientId='747893141016-145iigjh1s5s1jjlcma4ts4sln6850d9.apps.googleusercontent.com'>
          <Signin/>
        </GoogleOAuthProvider>
      </div>
    )
  }
  const GoogleAuthWrapper2 = ()=>{
    return (
      <div>
        <GoogleOAuthProvider clientId='747893141016-145iigjh1s5s1jjlcma4ts4sln6850d9.apps.googleusercontent.com'>
          <Login/>
        </GoogleOAuthProvider>
      </div>
    )
  }
  return (
    <>
     <div>
       <ToastContainer/>
      <BrowserRouter>
      <Routes>
      <Route element={<ProtectedRoute/>}> 
      <Route path='/' element={<Home/>}/>
      </Route>
      <Route path='/login' element={<GoogleAuthWrapper2/>}/>
      <Route path='/signin' element={<GoogleAuthWrapper/>}/>
      <Route path='Shop' element={<Shop/>}/> 
      <Route path='Shop/Product' element={<Product1/>}/>
      <Route path='Shop/item' element={<ShowItem/>}/>
      <Route path='Shop/cart' element={<Addtocart/>}/>
      <Route path='Shop/address' element={<Address/>}/>
      <Route path="Shop/checkout" element={<Checkout/>} />
      <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
       
     </div>
    </>
  )
}

export default App
