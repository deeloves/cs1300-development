import React from 'react';
import ItemInCart from './ItemInCart';

const Cart = ({ itemsInCart, changeCartQuantity, removeFromCart, calculateTotal }) => {
  return (
    <div className="cart">
      <h2 className="mb-3">your cart</h2>
      <div className="cart-items">
        {itemsInCart.map(item => (
          <ItemInCart
            key={item.name}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            changeCartQuantity={changeCartQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <button className="checkout" onClick={calculateTotal}>checkout</button>
    </div>
  );
};

export default Cart;
