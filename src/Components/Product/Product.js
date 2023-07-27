import React, { useState } from "react";
import "./Product.css";
const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;

  return (
    <div className="main-product">
      <div className="product">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="product-detail">
          <h3>{name}</h3>

          <p>
            <small>By: {seller}</small>
          </p>
          <p>Price: ${price}</p>
          <p>Only {stock} left in stock -Order Now</p>
          <br />
          <div className="button-style">
            <button onClick={() => props.handleIncrement(props.product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
