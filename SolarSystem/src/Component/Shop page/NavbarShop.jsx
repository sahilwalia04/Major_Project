import React, { useState } from 'react';
import './NavbarShop.css';
import cross from '../images/cross.png';
import shop from '../images/shop.png';
import search from '../images/search.png';
import drop from '../images/drop.png';
import { useNavigate } from 'react-router-dom';

function NavbarShop() {
  const [dropdownState, setDropdownState] = useState({
    men: false,
    women: false,
    kids: false,
    accessories: false,
    stickers: false,
  });
  const [isMessageVisible, setMessageVisible] = useState(true);
  const [productCount, setProductCount] = useState(0); // Track product count
  const navigate = useNavigate();

  const toggleDropdown = (key) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const closeMessage = () => {
    setMessageVisible(false);
  };

  const navigateToCart = () => {
    navigate('/shop/cart');
  };

  const addProduct = () => {
    setProductCount((prevCount) => prevCount + 1); // Increment product count
  };

  return (
    <div className='bodynav'>
      {isMessageVisible && (
        <div className='firstnav'>
          <p><b>Open your own merch shop today. Always Free.</b></p>
          <div className='cross' onClick={closeMessage}>X</div>
        </div>
      )}
      <div className='secondnav'>
        <div>Solar System Scope: SPACE SHOP</div>
        <div className='imgss'>
          <img src={search} alt="Search" />
          <div className="shopbtn-container">
            <img src={shop} alt="Shop" className='shopbtn' onClick={navigateToCart} />
            {productCount > 0 && <span className="product-badge">{productCount}</span>}
          </div>
        </div>
      </div>
      <hr />
      <div className='thirdnav'>
        <div className="innernav31"><b>All designs</b></div>
        <div className="innernav32">
          <b>Organic Products</b>
          <img src={drop} alt="Dropdown" />
          <div className='dropdown31'>
            <div>All</div>
            <div>Kids & Babies</div>
            <div>Accessories</div>
          </div>
        </div>
        <div className="innernav33">
          <b>Men</b>
          <img src={drop} alt="Dropdown" onClick={toggleDropdown} />
          <div className='dropdown32'>
            <div>All</div>
            <div>Organic Product</div>
            <div>T-Shirts</div>
            <div>Hopdies & Sweatshirts</div>
            <div>Long Sleep Shirts</div>
            <div>Sportswear</div>

            
          </div>
          
        </div>
        <div className="innernav34">
          <b>Women</b>
          <img src={drop} alt="Dropdown" onClick={toggleDropdown} />
          <div className='dropdown33'>
            <div>All</div>      
            <div>T-Shirts</div>
            <div>Hopdies & Sweatshirts</div>
            <div>Polo Shirts</div>
            <div>Tanks</div>
            <div>Sportswear</div>    
            <div>Plus Size</div>
          </div>
        </div>
        <div className="innernav35">
          <b>Kids & Babies</b>
          <img src={drop} alt="Dropdown" onClick={toggleDropdown} />
          <div className='dropdown34'>
            <div>All</div>      
            <div>Organic Product</div>
            <div>Kides Shirtes</div>
            <div>Hopdies & Sweatshirts</div>
            <div>Baby Product</div>
            <div>Accessories</div>             
          </div>
        </div>
        <div className="innernav36">
          <b>Accessories</b>
          <img src={drop} alt="Dropdown" onClick={toggleDropdown} />
          <div className='dropdown35'>
            <div>All</div>      
            <div>Caps & Hats</div>
            <div>Bags & Backpacks</div>
            <div>Mugs & Drinkware</div>
            <div>Sticker & Magnets</div>
            <div>Buttons</div>        
            <div>Pillows</div>             
            <div>Other</div>            
          </div>
        </div>
        <div className="innernav37">
          <b>Stickers</b>
          <img src={drop} alt="Dropdown" onClick={toggleDropdown} />
          <div className='dropdown36'>
            <div>All</div>      
            <div>Sticker</div>
                  
          </div>
        </div>
      </div>
      <div className='lastnav'>
        <div>
          <p><b>Only 2 days left:</b></p>
          <p className='md'>Free standard shipping</p>
          <p className='redeem'>Redeem</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarShop;
