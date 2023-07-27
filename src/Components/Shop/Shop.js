import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const handleIncrement = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((pd) => (
          <Product handleIncrement={handleIncrement} product={pd}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
