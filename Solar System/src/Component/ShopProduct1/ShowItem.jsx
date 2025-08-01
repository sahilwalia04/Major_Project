import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './ShowItem.css';
import NavbarShop from '../Shop page/NavbarShop';
import ShopFooter from '../Shop page/ShopFooter';
import shop from '../images/shop.png';

function ShowItem() {
    const location = useLocation();
    const selectedItem = location?.state?.selectedItem || null;

    
    const handleAddToCart = () => {
        if (selectedItem) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
            const itemIndex = cart.findIndex(item => item.id === selectedItem.id);
    
            if (itemIndex !== -1) {
                cart[itemIndex].quantity += 1;
            } else {
                cart.push({ ...selectedItem, quantity: 1 });
            }
    
            localStorage.setItem('cart', JSON.stringify(cart));
    
            alert(`${selectedItem.name} has been added to the cart!`);
        }
    };
    return (
        <div className="bodyp1">
            <NavbarShop />
            <div className="show-item-container">
                <p>Home &gt; Design: Solar System Scope : Little Space Explorer Solar System Scope : {selectedItem?.name || 'Unknown'}</p>

                {selectedItem ? (
                    <div className="item-details">
                        <div>
                            <img src={selectedItem.img} alt={selectedItem.name || 'Product image'} className="item-img" />
                        </div>
                        <div>
                            <div className="infoitem">
                                <h1>Solar System Scope: {selectedItem.name}</h1>
                                <hr />
                                <h4 className="itemh4">Price: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(selectedItem.price)}</h4>
                                <button className="addcard" onClick={handleAddToCart}>
                                    <img src={shop} alt="shop" />
                                    <b>Add to cart</b>
                                </button>
                                <hr />
                                <p>Size: {selectedItem.size || 'N/A'}</p>
                                <p>Color: {selectedItem.color || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>No item selected</div>
                )}
            </div>
            <ShopFooter />
        </div>
    );
}

export default ShowItem;
