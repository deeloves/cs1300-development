import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Sort from './Sort';
import Filter from './Filter';
import FilteredItems from './FilteredItems';
import Cart from './Cart';
import loadedImages from './loaded-images';
import './App.css';

const items = [
  {
    name: 'rice',
    price: 3.99,
    category: 'food',
    brand: 'Good Value',
    photo: loadedImages.rice
  },
  {
    name: 'beans',
    price: 0.99,
    category: 'food',
    brand: 'Good Value',
    photo: loadedImages.beans
  },
  {
    name: 'bread',
    price: 1.49,
    category: 'food',
    brand: 'Good Value',
    photo: loadedImages.bread
  },
  {
    name: 'ham',
    price: 9.99,
    category: 'food',
    brand: 'CarcinoGen',
    photo: loadedImages.ham
  },
  {
    name: 'cantaloupe',
    price: 2.49,
    category: 'food',
    brand: 'Croagur',
    photo: loadedImages.cantaloupe
  },
  {
    name: 'spring mix',
    price: 4.99,
    category: 'food',
    brand: 'Croagur',
    photo: loadedImages.springMix
  },
  {
    name: 'hand sanitizer',
    price: 999.99,
    category: 'other essentials',
    brand: 'Croagur',
    photo: loadedImages.handSanitizer
  },
  {
    name: 'sanitizing wipes',
    price: 3.99,
    category: 'other essentials',
    brand: 'Croagur',
    photo: loadedImages.sanitizingWipes
  },
  {
    name: 'face masks',
    price: 12.99,
    category: 'other essentials',
    brand: 'Croagur',
    photo: loadedImages.faceMasks
  },
  {
    name: 'disposable gloves',
    price: 18.99,
    category: 'other essentials',
    brand: 'Croagur',
    photo: loadedImages.disposableGloves
  },
  {
    name: 'whiskey',
    price: 24.99,
    category: 'other essentials',
    brand: 'CarcinoGen',
    photo: loadedImages.whiskey
  },
  {
    name: 'toilet paper',
    price: 7.99,
    category: 'non-essentials',
    brand: 'Good Value',
    photo: loadedImages.toiletPaper
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
      <Cart itemsInCart={itemsInCart} />
    </div>
  );
};

export default App;
