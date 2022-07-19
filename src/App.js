import React from 'react';

import Header from './Components/Header';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import PizzaBlock from './Components/PizzaBlock';

import './scss/app.scss';

import pizzas from './assets/db.json';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Всі піцци</h2>
            <div className="content__items">
              {pizzas.map((item) => (
                <PizzaBlock
                  title={item.title}
                  price={item.price}
                  image={item.imageUrl}
                  sizes={item.sizes}
                  types={item.types}
                  // {...item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
