import React from 'react';

const Filter = ({
  categories,
  brands,
  filterApp,
  resetCategories,
  resetBrands
}) => {
  /* can't name function in App & Filter the same so have to name them
  something stupid like this */
  const filterFilter = e => {
    filterApp(e.target.id);
  };
  return (
    <>
      <div className="filter-outer">
        <h2>
          search by category{' '}
          <button className="reset" onClick={resetCategories}>
            (reset)
          </button>
          :
        </h2>
        <div className="filter-inner">
          <div>
            <input
              id="checkbox-food"
              type="checkbox"
              name="category"
              checked={categories.includes('food')}
              onChange={filterFilter}
            />
            <label htmlFor="checkbox-food">food</label>
          </div>
          <div>
            <input
              id="checkbox-other-essentials"
              type="checkbox"
              name="category"
              checked={categories.includes('other essentials')}
              onChange={filterFilter}
            />
            <label htmlFor="checkbox-other-essentials">other essentials</label>
          </div>
          <div>
            <input
              id="checkbox-non-essentials"
              type="checkbox"
              name="category"
              checked={categories.includes('non-essentials')}
              onChange={filterFilter}
            />
            <label htmlFor="checkbox-non-essentials">non-essentials</label>
          </div>
        </div>
      </div>
      <div className="filter-outer">
        <h2>
          search by brand{' '}
          <button className="reset" onClick={resetBrands}>
            (reset)
          </button>
          :
        </h2>
        <div className="filter-inner">
          <div>
            <input
              id="checkbox-good-value"
              type="checkbox"
              name="brand"
              checked={brands.includes('Good Value')}
              onChange={filterFilter}
            />
            <label htmlFor="checkbox-good-value">Good Value</label>
          </div>
          <div>
            <input
              id="checkbox-croagur"
              type="checkbox"
              name="brand"
              checked={brands.includes('Croagur')}
              onChange={filterFilter}
            />
            <label htmlFor="checkbox-croagur">Croagur</label>
          </div>
          <div>
            <input
              id="checkbox-carcinogen"
              type="checkbox"
              name="brand"
              checked={brands.includes('CarcinoGen')}
              onChange={filterFilter}
            />
            <label htmlFor="checkbox-carcinogen">CarcinoGen</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
