import React from 'react';
import { Link } from 'react-router-dom';

import emptyCartImg from '../assets/img/empty-cart.png';
const CartEmpty = () => {
  return (
    <div class="cart cart--empty">
      <h2>
        Корзина пуста <icon>😕</icon>
      </h2>
      <p>
        Ви ще не замовили піцу.
        <br />
        Для того, щоб замовити піцу, перейдіть на головну сторінку.
      </p>
      <img src={emptyCartImg} alt="Empty cart" />
      <Link to="/" class="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
