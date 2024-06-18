import React from 'react';
import './ProductPage.css'; // Assuming a CSS file for styling

const ProductPage = ({ product }) => {
  return (
    <div className="product-page">
      <div className="product-images">
        {/* Images would be dynamically loaded here */}
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="product-sizes">
          <h3>Sizes</h3>
          {/* Sizes would be dynamically listed here */}
        </div>
        <div className="product-colors">
          <h3>Colors</h3>
          {/* Colors would be dynamically listed here */}
        </div>
        <div className="product-reviews">
          <h3>Customer Reviews</h3>
          {/* Reviews would be dynamically loaded here */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
