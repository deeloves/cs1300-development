import React from 'react';

const Sort = ({ priceDirection, sortIncreasing, sortDecreasing }) => {
  return (
    <div className="sort py-3">
      <h2>sort by price:</h2>
      <div className="price-buttons py-2 py-md-0">
        <button
          className={`btn btn-price${
            priceDirection === 'low to high' ? ' btn-price-selected' : ''
          }`}
          onClick={sortIncreasing}
        >
          low to high
        </button>
        <button
          className={`btn btn-price${
            priceDirection === 'high to low' ? ' btn-price-selected' : ''
          }`}
          onClick={sortDecreasing}
        >
          high to low
        </button>
      </div>
    </div>
  );
};

export default Sort;
