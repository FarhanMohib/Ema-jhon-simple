import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, pd) => total + pd.price, 0);

  let shipping = 0;
  if (total > 1000) {
    shipping = 0;
  } else if (total > 500) {
    shipping = 5.99;
  } else if (total > 0) {
    shipping = 15.0;
  }

  let tax = total / 10;
  return (
    <div>
      <h2>Product Summary</h2>
      <h4>Items Ordered: {cart.length} </h4>
      <p>Product Price: ${total}</p>
      <p>
        <small>Shipping Cost: $ {shipping}</small>
      </p>
      <p>Tax + Vat: ${tax}</p>
      <p>Total Price: $ {total + shipping + tax}</p>
    </div>
  );
};

export default Cart;
