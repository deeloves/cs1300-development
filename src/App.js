import React, { useState } from 'react';
import Sort from './Sort';
import Filter from './Filter';
import FilteredItems from './FilteredItems';
import Cart from './Cart';
import './App.scss';

// to be used for 2 separate pieces of state, so included outside App
const pantry = [
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
  // items that haven't yet been added to cart
  const [items, setItems] = useState(pantry.map(el => ({ ...el })));
  // things to store in state
  const [priceDirection, setPriceDirection] = useState('low to high');
  const [categories, setCategories] = useState([
    'food',
    'other essentials',
    'non-essentials'
  ]);
  const [brands, setBrands] = useState(['Good Value', 'Croagur', 'CarcinoGen']);
  const [itemsInCart, setItemsInCart] = useState(pantry.map(el => ({ ...el })));
  const [justAdded, setJustAdded] = useState(false);
  // event handlers
  const sortIncreasing = () => {
    setPriceDirection('low to high');
  };
  const sortDecreasing = () => {
    setPriceDirection('high to low');
  };
  const filterApp = id => {
    switch (id) {
      case 'checkbox-food':
        if (categories.includes('food')) {
          setCategories(categories.filter(el => el !== 'food'));
        } else {
          // set state in an immutable way
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
  const resetCategories = () => {
    setCategories(['food', 'other essentials', 'non-essentials']);
  };
  const resetBrands = () => {
    setBrands(['Good Value', 'Croagur', 'CarcinoGen']);
  };
  // change item quantities
  const changeQuantity = (name, val) => {
    // set state in an immutable way
    const itemsCopy = items.map(item => ({ ...item }));
    itemsCopy.find(item => item.name === name).quantity = +val;
    setItems(itemsCopy);
  };
  // add items to cart
  const addToCart = e => {
    const {
      target: {
        dataset: { item: name }
      }
    } = e;
    // if quantity to add more than 0, add items to cart
    const { quantity } = items.find(item => item.name === name);
    if (quantity > 0) {
      const itemsCopy1 = itemsInCart.map(item => ({ ...item }));
      itemsCopy1.find(item => item.name === name).quantity += quantity;
      setItemsInCart(itemsCopy1);
      // set item quantity back to 0
      const itemsCopy2 = items.map(item => ({ ...item }));
      itemsCopy2.find(item => item.name === name).quantity = 0;
      setItems(itemsCopy2);
      // display alert briefly
      setJustAdded(true);
      setTimeout(() => {
        setJustAdded(false);
      }, 1000);
    }
  };
  const changeCartQuantity = (name, val) => {
    const itemsInCartCopy = itemsInCart.map(item => ({ ...item }));
    itemsInCartCopy.find(item => item.name === name).quantity = +val;
    setItemsInCart(itemsInCartCopy);
  };
  const removeFromCart = e => {
    const {
      target: {
        dataset: { item: name }
      }
    } = e;
    const itemsInCartCopy = itemsInCart.map(item => ({ ...item }));
    itemsInCartCopy.find(item => item.name === name).quantity = 0;
    setItemsInCart(itemsInCartCopy);
  };
  const calculateTotal = () => {
    let total = 0;
    for (const item of itemsInCart) {
      total += item.price * item.quantity;
    }
    alert(`your total: $${total.toFixed(2)}`);
  };
  // what to render to DOM
  return (
    <div className="app">
      {/* alert to show when item added to cart */}
      <div
        className={`alert alert-success position-fixed w-100 d-${
          justAdded ? 'block' : 'none'
        }`}
      >
        added to cart!
      </div>
      <h1>COVID-19 Hoarding Simulator</h1>
      <Sort
        priceDirection={priceDirection}
        sortIncreasing={sortIncreasing}
        sortDecreasing={sortDecreasing}
      />
      <Filter
        categories={categories}
        brands={brands}
        filterApp={filterApp}
        resetCategories={resetCategories}
        resetBrands={resetBrands}
      />
      <div className="divider" />
      <FilteredItems
        items={items}
        priceDirection={priceDirection}
        categories={categories}
        brands={brands}
        changeQuantity={changeQuantity}
        addToCart={addToCart}
      />
      <div className="divider" />
      <Cart
        itemsInCart={itemsInCart}
        changeCartQuantity={changeCartQuantity}
        removeFromCart={removeFromCart}
        calculateTotal={calculateTotal}
      />
    </div>
  );
};

export default App;
