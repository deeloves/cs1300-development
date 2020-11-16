import React from 'react';
import ItemInCart from './ItemInCart';

const Cart = ({ itemsInCart }) => {
  return (
    <div className="cart">
      <h2 className="mb-3">your cart</h2>
      {itemsInCart.map(item => (
        <ItemInCart
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      <button className="checkout">checkout</button>
    </div>
  );
};

export default Cart;
