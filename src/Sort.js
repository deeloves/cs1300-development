import React from 'react';

const Sort = () => {
  return (
    <div className="sort py-3">
      <h2>sort by price:</h2>
      <div className="price-buttons py-2 py-md-0">
        <button className="btn btn-price">low to high</button>
        <button className="btn btn-price">high to low</button>
      </div>
    </div>
  );
};

export default Sort;
