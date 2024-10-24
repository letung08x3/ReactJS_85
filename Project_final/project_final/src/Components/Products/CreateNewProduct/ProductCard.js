import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-label">
        <span>Mẫu mới</span>
      </div>
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card-details">
        <h4 className="product-card-title">{product.name}</h4>
        <div className="product-card-info">
          <span>{product.display}</span>
          <span>{product.screenSize}</span>
        </div>
        <div className="product-card-options">
          <button>{product.storage[0]}</button>
          <button>{product.storage[1]}</button>
          <button>{product.storage[2]}</button>
        </div>
        <p className="product-card-status">Hàng sắp về</p>
        <p className="product-card-price">{product.price}đ</p>
        <div className="product-card-footer">
          <span className="rating">
            <i className="fa fa-star"></i>
            {product.rating} ({product.reviews})
          </span>
          <a href="/" className="compare-link">
            So sánh
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
