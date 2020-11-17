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
    brand: 'Good Value',
    quantity: 0
  },
  {
    name: 'beans',
    price: 0.99,
    category: 'food',
    brand: 'Good Value',
    quantity: 0
  },
  {
    name: 'bread',
    price: 1.49,
    category: 'food',
    brand: 'Good Value',
    quantity: 0
  },
  {
    name: 'ham',
    price: 9.99,
    category: 'food',
    brand: 'CarcinoGen',
    quantity: 0
  },
  {
    name: 'cantaloupe',
    price: 2.49,
    category: 'food',
    brand: 'Croagur',
    quantity: 0
  },
  {
    name: 'spring mix',
    price: 4.99,
    category: 'food',
    brand: 'Croagur',
    quantity: 0
  },
  {
    name: 'hand sanitizer',
    price: 999.99,
    category: 'other essentials',
    brand: 'Croagur',
    quantity: 0
  },
  {
    name: 'sanitizing wipes',
    price: 3.99,
    category: 'other essentials',
    brand: 'Croagur',
    quantity: 0
  },
  {
    name: 'face masks',
    price: 12.99,
    category: 'other essentials',
    brand: 'Croagur',
    quantity: 0
  },
  {
    name: 'disposable gloves',
    price: 18.99,
    category: 'other essentials',
    brand: 'Croagur',
    quantity: 0
  },
  {
    name: 'whiskey',
    price: 24.99,
    category: 'other essentials',
    brand: 'CarcinoGen',
    quantity: 0
  },
  {
    name: 'toilet paper',
    price: 7.99,
    category: 'non-essentials',
    brand: 'Good Value',
    quantity: 0
  }
];

const App = () => {
  // things to store in state
  const [id, setId] = useState(nanoid());
  console.log(id);
  const [priceDirection, setPriceDirection] = useState('low to high');
  const [categories, setCategories] = useState([
    'food',
    'other essentials',
    'non-essentials'
  ]);
  const [brands, setBrands] = useState(['Good Value', 'Croagur', 'CarcinoGen']);
  const [itemsInCart, setItemsInCart] = useState([]);
  // event handlers
  const sortIncreasing = () => {
    setPriceDirection('low to high');
  };
  const sortDecreasing = () => {
    setPriceDirection('high to low');
  };
  const filterApp = (id, val) => {
    switch (id) {
      case 'checkbox-food':
        if (categories.includes('food')) {
          setCategories(categories.filter(el => el !== 'food'));
        } else {
          setCategories([...categories, 'food']);
        }
        break;
      case 'checkbox-other-essentials':
        if (categories.includes('other essentials')) {
          setCategories(categories.filter(el => el !== 'other essentials'));
        } else {
          setCategories([...categories, 'other essentials']);
        }
        break;
      case 'checkbox-non-essentials':
        if (categories.includes('non-essentials')) {
          setCategories(categories.filter(el => el !== 'non-essentials'));
        } else {
          setCategories([...categories, 'non-essentials']);
        }
        break;
      case 'checkbox-good-value':
        if (brands.includes('Good Value')) {
          setBrands(brands.filter(el => el !== 'Good Value'));
        } else {
          setBrands([...brands, 'Good Value']);
        }
        break;
      case 'checkbox-croagur':
        if (brands.includes('Croagur')) {
          setBrands(brands.filter(el => el !== 'Croagur'));
        } else {
          setBrands([...brands, 'Croagur']);
        }
        break;
      case 'checkbox-carcinogen':
        if (brands.includes('CarcinoGen')) {
          setBrands(brands.filter(el => el !== 'CarcinoGen'));
        } else {
          setBrands([...brands, 'CarcinoGen']);
        }
        break;
      default:
        break;
    }
  };
  // what to render to DOM
  return (
    <div className="app">
      <h1>COVID-19 Hoarding Simulator</h1>
      <Sort sortIncreasing={sortIncreasing} sortDecreasing={sortDecreasing} />
      <Filter
        categories={categories}
        brands={brands}
        filterApp={filterApp}
      />
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
