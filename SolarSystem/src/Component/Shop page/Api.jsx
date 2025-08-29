import React, { useState, useEffect } from 'react';
import './Api.css';
import { useNavigate } from 'react-router-dom';

function Api() {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
 
  useEffect(() => {
    fetch('https://shivamwallu.site/api/api/users')  // Ensure this points to your Express server's correct port
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setDesigns(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='bodyapi'>
      <div className='apihome'>HOME</div>
      <h1>All Designs</h1>
      <div className='apidiv'>
        <div className='items'>
          {designs.map((design) => (
             <div
             key={design.id}
             className='p1item'
             onClick={() => navigate('/shop/product', { state: { selectedProduct: design } })}
           >
              <img src={design.img} alt={design.name} className='item-img' />
              <h3>{design.name}</h3>
              <p>Products: {design.product}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Api;
