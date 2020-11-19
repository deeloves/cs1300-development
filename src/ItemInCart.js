import React from 'react';

const ItemInCart = ({
  name,
  price,
  quantity,
  changeCartQuantity,
  removeFromCart
}) => {
  /* replace spaces w/ hyphens so we can use names as id attribute value */
  const inputName = name.replaceAll(' ', '-');
  return quantity > 0 ? (
    <div className="item-in-cart">
      <img
        src={require(`./images/${name.replaceAll(' ', '_')}.jpg`).default}
        alt="whatever"
        className="img-cart"
      />
      <div className="d-flex flex-column pl-3">
        <h3>
          {name}
          {/* format price like $x.xx */}
          <span> - ${(price * quantity).toFixed(2)}</span>
        </h3>
        <label htmlFor={`change-quantity-${inputName}`} className="mt-1 mb-0">
          change quantity
        </label>
        <input
          type="number"
          id={`change-quantity-${inputName}`}
          value={quantity}
          onChange={e => changeCartQuantity(name, e.target.value)}
        />
        {/* use data-item value associate button w/ item & use in App */}
        <button
          className="btn btn-danger mt-2"
          onClick={removeFromCart}
          data-item={name}
        >
          remove all from cart
        </button>
      </div>
    </div>
  ) : null;
};

export default ItemInCart;
