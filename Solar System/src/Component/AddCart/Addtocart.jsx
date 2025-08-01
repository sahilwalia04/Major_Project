import React, { useEffect, useState } from 'react';
import './Addtocart.css';
import NavbarShop from '../Shop page/NavbarShop';
import ShopFooter from '../Shop page/ShopFooter';
import del from '../images/delete.png';
import visa from '../images/visa.png';
import { useNavigate } from 'react-router-dom';
function Addtocart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData)); 
    }
  }, []);

  // Function to handle quantity change
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Function to delete an item
  const handleDelete = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Function to increment item quantity
  const handleIncrement = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = 70;
  const total = subtotal + shipping;


  useEffect(() => {
    localStorage.setItem('cartTotal', total);
  }, [total]);

   const naviHandle = () => {
      navigate('/shop/address')
   }
  return (
    <div className='bodyp1'>
      <NavbarShop />
      <div className='p1head'>
        HOME &gt; SHOPPING CART
      </div>
      <div className='shopcart'>
        <h1>Shopping Cart</h1>
        <div className='inner2scart'>
          {cart.length > 0 ? (
            <div className='innershopcart'>
              {cart.map((item, index) => (
                <div className='contc1' key={index}>
                  <div className='innercontc1'>
                    <div>
                      <img className='itemimg' src={item.img} alt={item.name} />
                    </div>
                    <div>
                      <p><b>{item.name}</b></p>
                      <p><b>Size: </b>{item.size}</p>
                      <p><b>Color: </b>{item.color}</p>
                    </div>
                  </div>
                  <div>
                    <p><b>Price: </b>{item.price}</p>
                    <div className='delicr'>
                      <img 
                        className='deletebtn' 
                        src={del} 
                        alt="Delete" 
                        onClick={() => handleDelete(index)}
                      />
                      <input 
                        type="number" 
                        min="1" 
                        value={item.quantity || 1} 
                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))} 
                      />
                      <span 
                        className='increamentbtn' 
                        onClick={() => handleIncrement(index)} 
                      >
                        <b>+</b>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
          <div className='checkoutcart'>
            <div>
              <div><b>Subtotal:</b></div>
              <div>{subtotal}rs</div>
            </div> <br />
            <div>
              <div><b>Shipping Costs:</b></div>
              <div>{shipping}rs</div>
            </div>
            <div>
              <p><b>Only 4 days left:</b> <br />20% Off Everything</p>
              <div className='redeem2'>Redeem</div>
            </div>
            <div>
              <p><b>Total:</b> <br />Incl. delivery</p>
              <div>{total}rs</div>
            </div>
            <div className='checkoutbtn' onClick={naviHandle}><b>Checkout</b></div> <br />
            <div><img src={visa} alt="Visa" /></div>
          </div>
        </div>
      </div>
      <ShopFooter />
    </div>
  );
}

export default Addtocart;
