import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { formatPrice } from '../utils/format';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { items, addItem, removeItem, clearCart } = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const handleCheckout = () => {
    setIsCheckout(true);
    // Here, integrate with the payment gateway
  };

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {items.length > 0 ? (
        <div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} - {formatPrice(item.price)} x {item.quantity}
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div>Total: {formatPrice(items.reduce((acc, item) => acc + item.price * item.quantity, 0))}</div>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={handleCheckout} disabled={isCheckout}>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
