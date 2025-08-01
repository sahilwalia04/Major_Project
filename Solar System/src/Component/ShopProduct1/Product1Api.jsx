import React, { useState, useEffect } from 'react';
import './Product1Api.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Product1Api() {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedProduct } = location.state || {}; // Retrieve the selectedProduct from state

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        let response;
        switch (selectedProduct?.id) {
          case 1:
            response = await fetch('http://localhost:5000/api/users/product1');
            break;
          case 2:
            response = await fetch('http://localhost:5000/api/users/product2');
            break;
          case 3:
            response = await fetch('http://localhost:5000/api/users/product3');
            break;
          case 4:
            response = await fetch('http://localhost:5000/api/users/product4');
            break;
          case 5:
            response = await fetch('http://localhost:5000/api/users/product5');
            break;
          case 6:
            response = await fetch('http://localhost:5000/api/users/product6');
            break;
          case 7:
            response = await fetch('http://localhost:5000/api/users/product7');
            break;
          case 8:
            response = await fetch('http://localhost:5000/api/users/product8');
            break;
          default:
            throw new Error('Invalid product ID');
        }

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setDesigns(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (selectedProduct?.id) {
      fetchProductData();
    }
  }, [selectedProduct]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='p1apibody'>
      <div className='p1head'>
        Home &gt; Design: Solar System Scope : {selectedProduct?.name}
      </div>
      <h1>Solar System Scope : {selectedProduct?.name}</h1>
      <div className='p1container'>
        <div className="container">
          <hr />
          <div className="section">
            <h3>Categories <i className="fas fa-chevron-up"></i></h3>
            <div className="section-content">
              <ul>
                <li>Organic Products</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids & Babies</li>
                <li>Accessories</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="section">
            <h3>Colors <i className="fas fa-chevron-up"></i></h3>
            <div className="section-content colors">
              <div className="color1"></div>
              <div className="color2"></div>
              <div className="color3"></div>
              <div className="color4"></div>
              <div className="color5"></div>
              <div className="color6"></div>
              <div className="color7"></div>
              <div className="color8"></div>
              <div className="color9"></div>
              <div className="color10"></div>
            </div>
          </div>
          <hr />
          <div className="section">
            <h3>Sizes <i className="fas fa-chevron-up"></i></h3>
            <div className="section-content sizes">
              <div className="size">XS</div>
              <div className="size">S</div>
              <div className="size">M</div>
              <div className="size">L</div>
              <div className="size">XL</div>
              <div className="size">XXL</div>
              <div className="size">3XL</div>
              <div className="size">4XL</div>
              <div className="size">5XL</div>
              <div className="size-group">Babies</div>
              <div className="size-group">Kids</div>
              <div className="size-group">Teenagers</div>
            </div>
          </div>
          <hr />
        </div>
        <div className='p1apidiv'>
          <div className='p1items'>
            {designs.map((design) => (
              <div
                key={design.id}
                className='p1item'
                onClick={() => navigate('/shop/item', { state: { selectedItem: design } })}
              >
                <img src={design.img} alt={design.name} className='p1item-img' />
                <div className='sizeapi'>{design.size}</div>
                <div className='colorapi'>{design.color}</div>
                <h4>{design.name}</h4>
                <p>Price: {design.price}rs</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product1Api;
