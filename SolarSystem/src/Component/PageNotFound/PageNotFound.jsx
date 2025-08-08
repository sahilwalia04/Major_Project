import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="error-container">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        {/* <a href="/" className="home-link">Go Back Home</a> */}
        <Link to={"/"} className='home-link'>GO Back Home</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
