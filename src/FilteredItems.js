import React from 'react';
import Item from './Item';

const FilteredItems = ({
  items,
  priceDirection,
  categories,
  brands,
  changeQuantity,
  addToCart
}) => {
  // use App's state to determine which items to display here
  const itemsToRenderUnsorted = items.filter(
    item => categories.includes(item.category) && brands.includes(item.brand)
  );
  let itemsToRenderSorted;
  /* Array#sort(): b comes before a;
     if function returns positive number, sort b before a (more expensive before less);
     if function returns negative number, sort a before b (less expensive before more)
  */
  if (priceDirection === 'low to high') {
    itemsToRenderSorted = itemsToRenderUnsorted.sort(
      (a, b) => a.price - b.price
    );
  } else {
    itemsToRenderSorted = itemsToRenderUnsorted.sort(
      (a, b) => b.price - a.price
    );
  }
  return (
    <div className="filtered-items">
      {itemsToRenderSorted.map(item => (
        <Item
          key={item.name}
          name={item.name}
          price={item.price}
          category={item.category}
          brand={item.brand}
          quantity={item.quantity}
          changeQuantity={changeQuantity}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default FilteredItems;
