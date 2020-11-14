import React from 'react';
import ItemInCart from './ItemInCart';

const Cart = ({ itemsInCart }) => {
  return (
    <div className="cart">
      <h2>your cart</h2>
      {itemsInCart.map(item => (
        <ItemInCart
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          photo={item.photo}
        />
      ))}
      <button>checkout</button>
    </div>
  );
};

export default Cart;
