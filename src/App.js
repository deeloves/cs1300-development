import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Sort from './Sort';
import Filter from './Filter';
import FilteredItems from './FilteredItems';
import Cart from './Cart';
import './App.scss';

const items = [
  {
    name: 'rice',
    price: 3.99,
    category: 'food',
    brand: 'Good Value'
  },
  {
    name: 'beans',
    price: 0.99,
    category: 'food',
    brand: 'Good Value'
  },
  {
    name: 'bread',
    price: 1.49,
    category: 'food',
    brand: 'Good Value'
  },
  {
    name: 'ham',
    price: 9.99,
    category: 'food',
    brand: 'CarcinoGen'
  },
  {
    name: 'cantaloupe',
    price: 2.49,
    category: 'food',
    brand: 'Croagur'
  },
  {
    name: 'spring mix',
    price: 4.99,
    category: 'food',
    brand: 'Croagur'
  },
  {
    name: 'hand sanitizer',
    price: 999.99,
    category: 'other essentials',
    brand: 'Croagur'
  },
  {
    name: 'sanitizing wipes',
    price: 3.99,
    category: 'other essentials',
    brand: 'Croagur'
  },
  {
    name: 'face masks',
    price: 12.99,
    category: 'other essentials',
    brand: 'Croagur'
  },
  {
    name: 'disposable gloves',
    price: 18.99,
    category: 'other essentials',
    brand: 'Croagur'
  },
  {
    name: 'whiskey',
    price: 24.99,
    category: 'other essentials',
    brand: 'CarcinoGen'
  },
  {
    name: 'toilet paper',
    price: 7.99,
    category: 'non-essentials',
    brand: 'Good Value'
  }
];

const App = () => {
  const [id, setId] = useState(nanoid());
  console.log(id);
  const [priceDirection, setPriceDirection] = useState('low to high');
  const [categories, setCategories] = useState(['food', 'other essentials', 'non-essentials']);
  const [brands, setBrands] = useState(['Good Value', 'Croagur', 'CarcinoGen']);
  const [itemsInCart, setItemsInCart] = useState([]);
  return (
    <div className="app">
      <h1>COVID-19 Hoarding Simulator</h1>
      <Sort />
      <Filter />
      <div className="divider" />
      <FilteredItems
        items={items}
        priceDirection={priceDirection}
        categories={categories}
        brands={brands}
      />
      <div className="divider" />
      <Cart itemsInCart={itemsInCart} />
    </div>
  );
};

export default App;
