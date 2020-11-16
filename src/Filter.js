import React from 'react';

const Filter = () => {
  return (
    <>
      <div className="filter-outer">
        <h2>search by category <button className="reset">(reset)</button>:</h2>
        <div className="filter-inner">
          <div>
            <input id="checkbox-food" type="checkbox" name="category" />
            <label htmlFor="checkbox-food">food</label>
          </div>
          <div>
            <input id="checkbox-other-essentials" type="checkbox" name="category" />
            <label htmlFor="checkbox-other-essentials">other essentials</label>
          </div>
          <div>
            <input id="checkbox-non-essentials" type="checkbox" name="category" />
            <label htmlFor="checkbox-non-essentials">non-essentials</label>
          </div>
        </div>
      </div>
      <div className="filter-outer">
        <h2>search by brand <button className="reset">(reset)</button>:</h2>
        <div className="filter-inner">
          <div>
            <input id="checkbox-good-value" type="checkbox" name="brand" />
            <label htmlFor="checkbox-good-value">Good Value</label>
          </div>
          <div>
            <input id="checkbox-croagur" type="checkbox" name="brand" />
            <label htmlFor="checkbox-croagur">Croagur</label>
          </div>
          <div>
            <input id="checkbox-carcinogen" type="checkbox" name="brand" />
            <label htmlFor="checkbox-carcinogen">CarcinoGen</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
