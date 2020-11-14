import React from 'react';

const ItemInCart = ({ name, price, quantity, photo }) => {
  return (
    <div className="item-in-cart">
      <img src="" alt="whatever" />
      <h3>{name}<span>- ${price * quantity}</span></h3>
      <div className="flex">
        <input type="number" />
        <button>remove all from cart</button>
      </div>
    </div>
  );
};

export default ItemInCart;
