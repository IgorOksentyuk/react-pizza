import React from 'react';
import { Link } from 'react-router-dom';

import emptyCartImg from '../assets/img/empty-cart.png';
const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пуста <span>😕</span>
    </h2>
    <p>
      Ви ще не замовили піцу.
      <br />
      Для того, щоб замовити піцу, перейдіть на головну сторінку.
    </p>
    <img src={emptyCartImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Повернутися назад</span>
    </Link>
  </div>
);

export default CartEmpty;
