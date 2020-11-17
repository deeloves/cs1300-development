import React from 'react';
import Item from './Item';

const FilteredItems = ({
  items,
  priceDirection,
  categories,
  brands,
  changeQuantity
}) => {
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
        />
      ))}
    </div>
  );
};

export default FilteredItems;
