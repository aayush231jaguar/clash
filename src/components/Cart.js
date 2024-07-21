import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">No games in the cart</div>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;