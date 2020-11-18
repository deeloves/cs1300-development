import React from 'react';

const ItemInCart = ({ name, price, quantity, changeCartQuantity, removeFromCart }) => {
  const inputName = name.replaceAll(' ', '-');
  return quantity > 0 ? (
    <div className="item-in-cart">
      <img
        src={require(`./images/${name.replaceAll(' ', '_')}.jpg`).default}
        alt="whatever"
        className="img-cart"
      />
      <h3>
        {name}
        <span>- ${(price * quantity).toFixed(2)}</span>
      </h3>
      <div>
        <label htmlFor={`change-quantity-${inputName}`}>change quantity</label>
        <input
          type="number"
          id={`change-quantity-${inputName}`}
          value={quantity}
          onChange={e => changeCartQuantity(name, e.target.value)}
        />
        <button className="btn btn-danger" onClick={removeFromCart} data-item={name}>remove all from cart</button>
      </div>
    </div>
  ) : null;
};

export default ItemInCart;
