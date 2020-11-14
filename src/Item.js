import React from 'react';

const Item = ({ name, price, category, brand }) => {
  return (
    <div className="item">
      <img src="" alt="whatever" />
      <h3>{name}<span>- ${price}</span></h3>
      <p>{category} - {brand}</p>
      <div className="flex">
        <input type="number" />
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default Item;
