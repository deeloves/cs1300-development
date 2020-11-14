import React from 'react';
import Item from './Item';

const FilteredItems = ({ items, priceDirection, categories, brands }) => {
  const itemsToRenderUnsorted = items.filter(
    item => categories.includes(item.category) && brands.includes(item.brand)
  );
  let itemsToRenderSorted;
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
    <>
      {itemsToRenderSorted.map(item => (
        <Item
          name={item.name}
          price={item.price}
          category={item.category}
          brand={item.brand}
          photo={item.photo}
        />
      ))}
    </>
  );
};

export default FilteredItems;
