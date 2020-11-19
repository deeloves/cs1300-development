import React from 'react';

const Item = ({ name, price, category, brand, quantity, changeQuantity, addToCart }) => {
  const inputName = name.replaceAll(' ', '-');
  return (
    <div className="item">
      {/* images in images folder have underscores in their names, not spaces */}
      <img
        src={require(`./images/${name.replaceAll(' ', '_')}.jpg`).default}
        alt={name}
        className="img-fluid img-fluid-not-cart"
      />
      <h3 className="mt-2">
        {name}
        <span className="item-price">&nbsp;- ${price}</span>
      </h3>
      <p>
        {category} - {brand}
      </p>
      <div>
        <label htmlFor={`item-${inputName}`}>quantity</label>
        <div>
          {/* when you click on an <input type="number">'s up or down arrows,
              e.target.value = incremented/decremented value */}
          <input
            type="number"
            id={`item-${inputName}`}
            min="0"
            value={quantity}
            onChange={e => changeQuantity(name, e.target.value)}
          />
          {/* use data-item value associate button w/ item & use in App */}
          <button className="btn btn-dark ml-3" onClick={addToCart} data-item={name}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
