import React from 'react';
import styles from '../NotFoundBlock/NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <div>😕</div>
      <h1>Нічого не знадено </h1>
      <p>На жаль у нашому інтернет магазині така сторінка відсутня</p>
    </div>
  );
};

export default NotFoundBlock;
