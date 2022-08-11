import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://62987872f2decf5bb7434cfd.mockapi.io/pizza/' + id);
        setPizza(data);
      } catch (error) {
        alert('Помилка при отриманні піцци!');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Завантаження...';
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₴</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, eaque!</p>
    </div>
  );
};

export default FullPizza;
