import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../FullPizza/FullPizza.module.scss';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://62987872f2decf5bb7434cfd.mockapi.io/pizza/' + id);
        setPizza(data);
      } catch (error) {
        alert('Помилка при отриманні піцци!');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Завантаження...';
  }
  return (
    <div className={styles.root}>
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₴</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, eaque!</p>
    </div>
  );
};

export default FullPizza;
