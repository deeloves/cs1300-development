import React from 'react';

const Item = ({ name, price, category, brand, quantity, changeQuantity }) => {
  return (
    <div className="item">
      <img
        src={require(`./images/${name.replaceAll(' ', '_')}.jpg`).default}
        alt="whatever"
        className="img-fluid img-fluid-not-cart"
      />
      <h3 className="mt-2">
        {name}
        <span className="item-price">&nbsp;- ${price}</span>
      </h3>
      <p>
        {category} - {brand}
      </p>
      <div className="flex">
        <label htmlFor={`item-${name}`}>quantity</label>
        <div>
          <input
            type="number"
            id={`item-${name}`}
            min="0"
            value={quantity}
            onChange={e => changeQuantity(e.target.id, e.target.value)}
          />
          <button className="btn btn-dark ml-3">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
